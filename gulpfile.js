'use strict';

var lernaJSON = require('./lerna.json');
var path = require('path');

var del = require('del');
var gulp = require('gulp');
var tslint = require("gulp-tslint");
var rename = require('gulp-rename');
var streamify = require('gulp-streamify');
var replace = require('gulp-replace');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var exec = require('child_process').exec;
var Karma = require('karma').Server;

var DEST = path.join(__dirname, 'dist/');

var packages = [{
  fileName: 'remme',
  expose: 'Remme',
  src: path.join(__dirname, 'packages/remme'),
  config: path.join(__dirname, 'packages/remme/tsconfig.json')
}, {
  fileName: 'remme-rest',
  expose: 'RemmeRest',
  src: path.join(__dirname, 'packages/remme-rest'),
  config: path.join(__dirname, 'packages/remme-rest/tsconfig.json')
}, {
  fileName: 'remme-certificate',
  expose: 'RemmeCertificate',
  src: path.join(__dirname, 'packages/remme-certificate'),
  config: path.join(__dirname, 'packages/remme-certificate/tsconfig.json')
}, {
  fileName: 'remme-token',
  expose: 'RemmeToken',
  src: path.join(__dirname, 'packages/remme-token'),
  config: path.join(__dirname, 'packages/remme-token/tsconfig.json')
}, {
  fileName: 'remme-personal',
  expose: 'RemmePersonal',
  src: path.join(__dirname, 'packages/remme-personal'),
  config: path.join(__dirname, 'packages/remme-personal/tsconfig.json')
}, {
  fileName: 'remme-http-client',
  expose: 'RemmeHttpClient',
  src: path.join(__dirname, 'packages/remme-http-client'),
  config: path.join(__dirname, 'packages/remme-http-client/tsconfig.json')
}, {
  fileName: 'remme-utils',
  expose: 'RemmeUtils',
  src: path.join(__dirname, 'packages/remme-utils'),
  config: path.join(__dirname, 'packages/remme-utils/tsconfig.json')
}];

var ugliyOptions = {
  compress: {
    dead_code: true,
    drop_debugger: true,
    global_defs: {
      "DEBUG": false
    }
  }
};

gulp.task('version', function () {
  if (!lernaJSON.version) {
    throw new Error("version property is missing from lerna.json");
  }

  var version = lernaJSON.version;
  var jsonPattern = /"version": "[.0-9\-a-z]*"/;
  var glob = [
    './package.json',
  ];

  gulp.src(glob, {
    base: './'
  })
    .pipe(replace(jsonPattern, '"version": "' + version + '"'))
    .pipe(gulp.dest('./'));
});

gulp.task('lint', [], function () {
  return gulp.src(['./packages/**/*.ts', '!./packages/**/node_modules/**/*.ts', "!./packages/**/*.d.ts"])
    .pipe(tslint({
      formatter: "prose",
      configuration: "./tslint.json"
    }))
    .pipe(tslint.report());
});

gulp.task('clean', ['lint'], function (cb) {
  del([DEST]).then(cb.bind(null, null));
});

packages.forEach(function (pckg, i) {
  var prevPckg = (!i) ? 'clean' : packages[i - 1].fileName;

  gulp.task(pckg.fileName, [prevPckg], function () {
    return browserify({
      basedir: '.',
      debug: true,
      standalone: pckg.expose,
      derequire: true,
      insertGlobalVars: false,
      detectGlobals: true,
      bundleExternal: true,
      entries: [ path.join(pckg.src, 'src/index.ts') ],
      cache: {},
      packageCache: {}
    })
      .plugin(tsify, {
        declaration: true,
        lib: [
          "es6",
          "DOM"
        ],
        types: ["node-forge"],
        include: [
          path.join(pckg.src, '/src/**/*.ts')
        ]
      })
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(streamify(uglify(ugliyOptions)))
      .pipe(rename(pckg.fileName + '.min.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(DEST));
  });
});

gulp.task('tests', [packages[packages.length - 1].fileName], function (done) {
  new Karma({
    configFile: path.join(__dirname, "karma.conf.js"),
    singleRun: true,
  }, done).start();
});

gulp.task('prepublish', function () {
  packages.forEach(function (pckg) {
    del([path.join(pckg.src, "dist")]).then(
      exec("cd " + pckg.src + " && npm run transpile;")
    )
  });
  exec("lerna bootstrap");
});

gulp.task("build", ['lint', 'clean', packages[packages.length - 1].fileName]);

gulp.task('watch', function () {
  gulp.watch(['./packages/type/**/*.ts'], ['lint', 'clean', packages[0].fileName]);
});

gulp.task('default', ['version', 'lint', 'clean', packages[0].fileName]);