pipeline {
  agent any
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
    stage('Run tests') {
      steps {
        sh 'make test'
      }
    }
  }
}
