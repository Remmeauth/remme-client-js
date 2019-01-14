'use strict';

const path = require('path');
const fs = require('fs');

// gulp and gulp plugins
const gulp = require('gulp');
const tslint = require("gulp-tslint");
const rename = require('gulp-rename');
const streamify = require('gulp-streamify');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const typedoc = require("gulp-typedoc");

const del = require('del');
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const tsify = require("tsify");
const buffer = require('vinyl-buffer');
const exec = require('child_process').exec;
const Karma = require('karma').Server;

const lernaJSON = require('./lerna.json');

const DEST = path.join(__dirname, 'dist/');
const srcRemmeProtobuf = path.join(__dirname, 'remme-protobuf');
const srcSawtoothProtobuf = path.join(__dirname, "sawtooth-protobuf");

const packages = [{
  fileName: 'remme',
  expose: 'Remme',
  src: path.join(__dirname, 'packages/remme'),
  config: path.join(__dirname, 'packages/remme/tsconfig.json')
}, {
  fileName: 'remme-api',
  expose: 'RemmeApi',
  src: path.join(__dirname, 'packages/remme-api'),
  config: path.join(__dirname, 'packages/remme-api/tsconfig.json')
}, {
  fileName: 'remme-certificate',
  expose: 'RemmeCertificate',
  src: path.join(__dirname, 'packages/remme-certificate'),
  config: path.join(__dirname, 'packages/remme-certificate/tsconfig.json')
}, {
  fileName: 'remme-public-key-storage',
  expose: 'RemmePublicKeyStorage',
  src: path.join(__dirname, 'packages/remme-public-key-storage'),
  config: path.join(__dirname, 'packages/remme-public-key-storage/tsconfig.json')
}, {
  fileName: 'remme-token',
  expose: 'RemmeToken',
  src: path.join(__dirname, 'packages/remme-token'),
  config: path.join(__dirname, 'packages/remme-token/tsconfig.json')
}, {
  fileName: 'remme-transaction-service',
  expose: 'RemmeTransactionService',
  src: path.join(__dirname, 'packages/remme-transaction-service'),
  config: path.join(__dirname, 'packages/remme-transaction-service/tsconfig.json')
}, {
  fileName: 'remme-web-socket',
  expose: 'RemmeWebSocket',
  src: path.join(__dirname, 'packages/remme-web-socket'),
  config: path.join(__dirname, 'packages/remme-web-socket/tsconfig.json')
}, {
  fileName: 'remme-web-socket-events',
  expose: 'RemmeWebSocketEvents',
  src: path.join(__dirname, 'packages/remme-web-socket-events'),
  config: path.join(__dirname, 'packages/remme-web-socket-events/tsconfig.json')
}, {
  fileName: 'remme-account',
  expose: 'RemmeAccount',
  src: path.join(__dirname, 'packages/remme-account'),
  config: path.join(__dirname, 'packages/remme-account/tsconfig.json')
}, {
  fileName: 'remme-blockchain-info',
  expose: 'RemmeBlockchainInfo',
  src: path.join(__dirname, 'packages/remme-blockchain-info'),
  config: path.join(__dirname, 'packages/remme-blockchain-info/tsconfig.json')
}, {
  fileName: 'remme-atomic-swap',
  expose: 'RemmeAtomicSwap',
  src: path.join(__dirname, 'packages/remme-atomic-swap'),
  config: path.join(__dirname, 'packages/remme-atomic-swap/tsconfig.json')
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
}, {
  fileName: 'remme-keys',
  expose: 'RemmeKeys',
  src: path.join(__dirname, 'packages/remme-keys'),
  config: path.join(__dirname, 'packages/remme-keys/tsconfig.json')
}, {
  fileName: 'remme-protobuf',
  expose: 'RemmeProtobuf',
  src: path.join(__dirname, 'packages/remme-protobuf'),
  config: path.join(__dirname, 'packages/remme-protobuf/tsconfig.json')
}];

const uglifyOptions = {
  compress: {
    dead_code: true,
    drop_debugger: true,
    global_defs: {
      "DEBUG": false
    }
  }
};

gulp.task('build_docs', function () {
  return gulp
    .src(["packages/**/*.ts", '!./packages/**/node_modules/**/*.ts', "!./packages/**/*.d.ts"])
    .pipe(typedoc({
      // TypeScript options (see typescript docs)
      module: "commonjs",
      target: "es5",
      includeDeclarations: false,
      lib: [ "lib.esnext.full.d.ts" ],

      // TypeDoc options (see typedoc docs)
      out: "./html",
      exclude: "**/*+(e2e|spec).ts",
      excludeExternals: true,
      excludePrivate: true,
      excludeProtected: true,
      ignoreCompilerErrors: true,
      moduleResolution: "node",
      preserveConstEnums: true,
      skipLibCheck: true,
      stripInternal: true,
      suppressExcessPropertyErrors: true,
      suppressImplicitAnyIndexErrors: true,
      mode: "file",
      // externalPattern: "**/node_modules/**",
    }));
});

gulp.task('version', function () {
  if (!lernaJSON.version) {
    throw new Error("version property is missing from lerna.json");
  }

  const version = lernaJSON.version;
  const jsonPattern = /"version": "[.0-9\-a-z]*"/;
  const glob = [
    './package.json',
  ];

  gulp.src(glob, {
    base: './'
  })
    .pipe(replace(jsonPattern, '"version": "' + version + '"'))
    .pipe(gulp.dest('./'));
});

gulp.task('lint', function () {
  return gulp.src(['./packages/**/*.ts', '!./packages/**/node_modules/**/*.ts', "!./packages/**/*.d.ts"])
    .pipe(tslint({
      formatter: "prose",
      configuration: "./tslint.json"
    }))
    .pipe(tslint.report());
});

gulp.task('protobuf-compile', function () {
  const remmeFiles = fs.readdirSync(srcRemmeProtobuf)
      .map(f => path.resolve(srcRemmeProtobuf, f));
  const sawtoothFiles = fs.readdirSync(srcSawtoothProtobuf)
      .map(f => path.resolve(srcSawtoothProtobuf, f));

  const files = [...remmeFiles, ...sawtoothFiles]
      .filter(f => f.endsWith('.proto'))
      .join(" ");

  exec('./node_modules/.bin/pbjs -t static-module -w commonjs -o ./packages/remme-protobuf/dist/index.js ' +
    files +
    '; ./node_modules/.bin/pbts -o ./packages/remme-protobuf/dist/index.d.ts ./packages/remme-protobuf/dist/index.js');
});

gulp.task('clean', ['lint'], function (cb) {
  del([DEST]).then(cb.bind(null, null));
});

packages.forEach(function (pckg, i) {
  const prevPckg = (!i) ? 'clean' : packages[i - 1].fileName;

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
        target: "es5",
        declaration: true,
        lib: [
          "es6",
          "DOM"
        ],
        include: [
          path.join(pckg.src, '/src/**/*.ts')
        ],
        exclude: [
          "node_modules"
        ]
      })
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(streamify(babel({
        compact: true,
        presets: [
          ['env', {
            "modules": false
          }]
        ]
      })))
      .pipe(streamify(uglify(uglifyOptions)))
      .pipe(rename(pckg.fileName + '.min.js'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(DEST));
  });
});

function test(done) {
  new Karma({
    configFile: path.join(__dirname, "karma.conf.js"),
    singleRun: true,
  }, done).start();
}

gulp.task('only_test', test);

gulp.task('tests', ["build"], test);

gulp.task('prepublish', function () {
  packages.forEach(function (pckg) {
    if (pckg.fileName !== "remme-protobuf") {
      del([path.join(pckg.src, "dist")]).then(
        exec("cd " + pckg.src + " && npm run transpile;")
      )
    } else {
      exec("./node_modules/.bin/gulp protobuf-compile");
    }
  });
});

gulp.task("build", ['lint', 'clean', 'build_docs', packages[packages.length - 2].fileName]);

gulp.task('watch', function () {
  gulp.watch(['./packages/remme/src/*.ts'], ['lint', 'clean', packages[0].fileName]);
});

gulp.task('default', ['version', 'lint', 'clean', 'build_docs', packages[0].fileName]);
