pipeline {
  agent {
    label 'remme-tests-worker'
  }
  options {
    timestamps()
  }
  stages {
    stage('Install pkg') {
      steps {
        sh 'npm install'
      }
    }
    stage('Git submodule init') {
      steps {
        sh 'git submodule init'
      }
    }
    stage('Git submodule update') {
      steps {
        sh 'git submodule update'
      }
    }
    stage('Generate protobufs') {
      steps {
        sh 'npm run generate-protobufs'
      }
    }
    stage('Generate protobufs in folder protobuf') {
      steps {
        sh '(cd remme-protobuf; git checkout master; npm run generate-protobufs)'
      }
    }
    stage('Run tests') {
      steps {
        ansiColor('xterm') {
            sh 'make test'
        }
      }
    }
  }
}