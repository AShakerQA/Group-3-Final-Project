 #! /bin/bash
 
cd /var/lib/jenkins

. ./databasecredentials.sh

ssh ubuntu@${testvm_ip} <<EOF
cd ~
. ./databasecredentials.sh

cd ~/Group-3-Final-Project/frontend/fp-group3-ticket/

sudo npm install

sudo npm test -- --watchAll=false --updateSnapshot

EOF
