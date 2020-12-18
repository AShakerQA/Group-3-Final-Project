#! /bin/bash

cd /var/lib/jenkins

. ./databasecredentials.sh

echo ${testvm_ip}
echo ${db_username}
echo ${db_endpoint}
echo ${testdb_endpoint}
echo ${password}
echo ${testdb_username}

ssh ubuntu@${testvm_ip} <<EOF
cd ~
. ./databasecredentials.sh

if [ ! -d ~/Group-3-Final-Project ]; then
   git clone https://github.com/AlasdairHanson/Group-3-Final-Project.git -b Dev
else 
   rm -rf Group-3-Final-Project
   git clone https://github.com/AlasdairHanson/Group-3-Final-Project.git -b Dev
fi

cd ~/Group-3-Final-Project/Spring-HelpQueue

mvn clean package | grep 'BUILD SUCCESS'

EOF
