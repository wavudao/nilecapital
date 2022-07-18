
pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
         stage('Clone repository') { 
            steps { 
                script{
                checkout scm
                }
            }
        }

        stage('Build') { 
            steps { 
                script{
                 app = docker.build("nilecapital")
                }
            }
        }
        stage('Test'){
            steps {
                 echo 'Empty'
            }
        }
        stage('push to Docker') {
            steps {
                script{
                        docker.withRegistry('https://917318273830.dkr.ecr.us-east-1.amazonaws.com/', 'ecr:us-east-1:my.aws.credentials') {
                    
                    app.push("Meta")
                    }
                }
            }
        }
        // stage('Deploy') {
        //     steps {
        //         script {
        //             sshagent(credentials : ['3.15.86.223']){

        //             sh "pwd"

        //             }
        //         }
        //     }
        // }
    }
}