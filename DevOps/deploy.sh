#! /bin/bash

#Instaling all the nessesary sofwares to configure the home machine i.e terraform, ansible, awscli and more

chmod +x automate_mainvm_software.sh
cd ~
. ./Group-3-Final-Project/DevOps/automate_mainvm_software.sh

sleep 1

echo "Software installations done"

#Congigure awscli credentials automatically 

chmod +x ~/secrets/aws_configure.sh
. ./secrets/aws_configure.sh

echo "aws configuration done"

#Export database password and username
cd ~
chmod +x ~/secrets/cred.sh
. ./secrets/cred.sh

echo "Exporting database credentials done"

#Adding in Terraform secrets for run time

if [ ! -f ~/Group-3-Final-Project/DevOps/terraform/terraform.tfvars ]; then
  chmod +x ~/secrets/terraform.tfvars
  cp -rf ~/secrets/terraform.tfvars ~/Group-3-Final-Project/DevOps/terraform
else
  echo "terraform.tfvars already exist"
fi


#Generate ssh keys if not already exist

if [ ! -f ~/.ssh/id_rsa.pub ]; then
  ssh-keygen -b 2048 -t rsa -f ~/.ssh/id_rsa -q -N ""
else
  echo "Public key already exist"
fi


#Start terraform

cd ~/Group-3-Final-Project/DevOps/terraform
terraform fmt
terraform init
terraform plan
terraform apply -auto-approve

echo "terraform finished"

#Export output ip addresses into variables to help mask secrets and prevent them from being pushed to git hub

export jenkinsvm_ip="$(terraform output jenkinsvm_ip)"
export jenkinsvm_ip=$(echo ${jenkinsvm_ip} | jq -r .)
export testvm_ip="$(terraform output testvm_ip)"
export testvm_ip=$(echo ${testvm_ip} | jq -r .)

echo "export terraform ip addresses into vars done"

#Export output endpoints addresses into variables to help mask secrets and prevent them from being pushed to git hub

export testdb_endpoint="$(terraform output rds_endpoint_test)"
export testdb_endpoint=$(echo ${testdb_endpoint} | jq -r .)
export testdb_endpoint=$(echo ${testdb_endpoint} | sed 's/:3306//')
export db_endpoint="$(terraform output rds_endpoint_prod)"
export db_endpoint=$(echo ${db_endpoint} | jq -r .)
export db_endpoint=$(echo ${db_endpoint} | sed 's/:3306//')


echo "export terraform rds endpoints into vars done"

#Passing in the hosts into the known hosts for ansible softare installation and automation

cd ~

sudo -- sh -c -e "echo '${testvm_ip} testvm_ip' >> /etc/hosts";

sudo -- sh -c -e "echo '${jenkinsvm_ip} jenkinsvm_ip' >> /etc/hosts";

echo "Passing terraform ip outputs to hosts done"

#Sleep 2 seconds to ensure these vm are fully up

sleep 2


#Make key directory if it does not already exist. This will store keys that I secure copy from any vm and use them for shh'ing into any vm.

cd ~
rm -rf keys
if [ ! -d keys/ ]; then
  mkdir keys
  cd keys
  mkdir testvm
  mkdir jenkins
  mkdir jenkinsusr
  cd ~
fi

echo "Making key directory done"

#Start anible playbook which installs all the neccessary softwares, add sudo doers and pass public keys into each vm to allow ssh'ing.

cd ~/Group-3-Final-Project/DevOps/ansible

ansible-playbook -i inventory playbook.yaml

sleep 3

echo "Ansible playbook done"
 
#Generate testvm ssh public keys if it does not already exist.

ssh ubuntu@${testvm_ip} <<EOF

if [ ! -f ~/.ssh/id_rsa.pub ]; then
  ssh-keygen -b 2048 -t rsa -f ~/.ssh/id_rsa -q -N ""
else
  echo "Public key already exist"
fi

EOF

echo "testvm ssh keys generated"

#Secure copy public key from testvm to the keys directory.

scp ubuntu@${testvm_ip}:~/.ssh/id_rsa.pub ~/keys/testvm

echo "scp public key to keys directory done"
      
#Generate jenkinvm ssh public keys if it does not already exist.

ssh ubuntu@${jenkinsvm_ip} <<EOF
if [ ! -f ~/.ssh/id_rsa.pub ]; then
  ssh-keygen -b 2048 -t rsa -f ~/.ssh/id_rsa -q -N ""
else
  echo "Public key already exist"
fi

EOF

#Secure copy public key from jenkinsvm to the keys directory.

scp ubuntu@${jenkinsvm_ip}:~/.ssh/id_rsa.pub ~/keys/jenkins

echo "scp jenkinsvm public key to keys directory"


#Secure copy public key from jenkinsvm jenkins_urs to the keys directory.

ssh ubuntu@${jenkinsvm_ip} << EOF 

cd ~
mkdir jenkinsusr_pubkey

sudo su - jenkins << EOF1 

if [ ! -f ~/.ssh/id_rsa.pub ]; then
  ssh-keygen -b 2048 -t rsa -f ~/.ssh/id_rsa -q -N ""
  sudo cp -rf ~/.ssh/id_rsa.pub /home/ubuntu/jenkinsusr_pubkey

else
  echo "Public key already exist"
fi

EOF1

EOF

echo "ssh keygen on jenkins_usr vm done"


#Secure copy public jenkinsvm jenkins_usr key to the keys directory.

scp ubuntu@${jenkinsvm_ip}:~/jenkinsusr_pubkey/id_rsa.pub ~/keys/jenkinsusr

echo "scp jenkinsuser public key to keys directory done"


#Passing all vm keys into master's autherized_keys file and sharing that file with the other vms to allow ssh'ing from anywhere.

cd ~
cat ~/keys/jenkins/id_rsa.pub >> ~/.ssh/authorized_keys
cat ~/keys/jenkinsusr/id_rsa.pub >> ~/.ssh/authorized_keys
cat ~/keys/testvm/id_rsa.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
scp ~/.ssh/authorized_keys ubuntu@${jenkinsvm_ip}:~/
scp ~/.ssh/authorized_keys ubuntu@${testvm_ip}:~/

ssh ubuntu@${testvm_ip} <<EOF
cd ~
cat ~/authorized_keys >> ~/.ssh/authorized_keys
rm -rf authorized_keys

EOF

ssh ubuntu@${jenkinsvm_ip} <<EOF
cd ~
cat ~/authorized_keys >> ~/.ssh/authorized_keys

rm -rf authorized_keys
rm -rf jenkinsusr_pubkey
EOF

echo "Passed authorized_keys to testvm and jenkinsvm done"

sleep 1

#Copying database schema and database URI securely to testvm, jenkinsvm and jenkinsvm_usr. 
#This helps to easily export and use variables such as database passwords, database usrnames, docker username, docker password and database URI's for the databases and dockerhub.
cd ~
touch databasecredentials.sh
chmod +x databasecredentials.sh

#Setting up cresentials file

echo "export testdb_endpoint=${testdb_endpoint}" >> ~/databasecredentials.sh
echo "export db_endpoint=${db_endpoint}" >> ~/databasecredentials.sh
echo "export db_username=${db_username}" >> ~/databasecredentials.sh
echo "export testdb_username=${testdb_username}" >> ~/databasecredentials.sh
echo "export password=${password}" >> ~/databasecredentials.sh
echo "export testvm_ip=${testvm_ip}" >> ~/databasecredentials.sh
echo "export DOCKER_USERNAME=${DOCKER_USERNAME}" >> ~/databasecredentials.sh
echo "export DOCKER_PASSWORD=${DOCKER_PASSWORD}" >> ~/databasecredentials.sh

#Copying credentials file over to jenkinsvm and testvm

scp ~/databasecredentials.sh ubuntu@${jenkinsvm_ip}:~/
scp ~/databasecredentials.sh ubuntu@${testvm_ip}:~/
scp -r ~/secrets ubuntu@${jenkinsvm_ip}:~/

sleep 2


#ssh'ing into testvm, exporting all variables, cloning done schema folder then passing in the test database schema.

ssh ubuntu@${testvm_ip} <<EOF

cd ~

. ./databasecredentials.sh

#Passing in ,env file

touch .env
chmod +x .env

echo "db_endpoint=${db_endpoint}" >> ~/.env
echo "db_username=${db_username}" >> ~/.env
echo "testdb_username=${testdb_username}" >> ~/.env
echo "password=${password}" >> ~/.env
echo "testdb_endpoint=${testdb_endpoint}" >> ~/.env


if [ ! -d ~/Group-3-Final-Project ]; then

        git clone https://github.com/AlasdairHanson/Group-3-Final-Project.git -b Dev
else
        cd ~/Group-3-Final-Project
        git pull

fi


sleep 2

#Passing in database schema

cd ~/Group-3-Final-Project/DevOps/database
mysql -h ${testdb_endpoint} -P 3306 -u ${testdb_username} -p${password} < Create_test.sql

echo "passing in sql schema"

EOF

echo "Passing test database schema done"

#ssh'ing into jenkinsvm, exporting all variables, cloning done schema folder then passing in the main database schema.
#Copying credentials from jenkinvm to jenkins_usr.

ssh ubuntu@${jenkinsvm_ip} <<EOF

cd ~

. ./databasecredentials.sh

. ./secrets/secrets.sh

cp -rf ~/secrets/secrets.sh ~/ 

#Copying credentials from jenkinvm to jenkins_usr to be able to export the neccessary variables in the jenkins pipeline.

sudo cp -rf ~/databasecredentials.sh /var/lib/jenkins
sudo cp -rf ~/secrets /var/lib/jenkins


if [ ! -d ~/Group-3-Final-Project ]; then
	
        git clone https://github.com/AlasdairHanson/Group-3-Final-Project.git -b Dev
else
        cd ~/Group-3-Final-Project
        git pull

fi


sleep 2

#Passing in database schema

cd ~/Group-3-Final-Project/DevOps/database

mysql -h ${db_endpoint} -P 3306 -u ${db_username} -p${password} < Create.sql

echo "passing in sql schema"

EOF

echo "Passing prodution database schems done"

