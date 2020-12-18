#! /bin/bash

sudo systemctl disable nginx

cd /var/lib/jenkins

. ./databasecredentials.sh

ssh ubuntu@${testvm_ip} <<EOF

cd ~
. ./databasecredentials.sh

echo 'Building frontend docker image'
cd ~/Group-3-Final-Project/frontend/fp-group3-ticket

sudo docker rmi $(docker images -q)
sudo docker system prune --volumes -a -f 

sudo docker build -t ${DOCKER_USERNAME}/frontend:latest .

echo ${DOCKER_USERNAME}
echo ${DOCKER_PASSWORD}


sudo docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
sudo docker push ${DOCKER_USERNAME}/frontend:latest

sudo docker rmi $(docker images -q)
sudo docker system prune --volumes -a -f 

EOF
