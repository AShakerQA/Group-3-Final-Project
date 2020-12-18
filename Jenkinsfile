pipeline{
        agent any
	
        stages{
            stage('Clone repo'){
                steps{
                    sh 'chmod a+x ./scripts/jenkins-get-repo.sh'
                    sh './scripts/jenkins-get-repo.sh'
                }
	    }
		
	stage('Test backend'){
                steps{
                    sh 'chmod a+x ./scripts/backend-run-test.sh'
                    sh './scripts/backend-run-test.sh'
                }
            }
	
            stage('Build backend'){
                steps{
                    sh 'chmod a+x ./scripts/backend-test.sh'
                    sh './scripts/backend-test.sh'
                }
            }

            	    stage('Test frontend'){
                steps{
                    sh 'chmod a+x ./scripts/frontend-test.sh'
                    sh './scripts/frontend-test.sh'
                }
            }

            stage('Docker Build'){
                steps{
                    sh 'chmod a+x ./scripts/docker-build.sh'
                    sh './scripts/docker-build.sh'
                }
            }
	    
	    stage('Deploy kubernetes cluster'){
	    	steps{
                    sh 'chmod a+x ./scripts/kube.sh'
                    sh './scripts/kube.sh'
		}

             }
	}    
}

