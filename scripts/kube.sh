 #! /bin/bash
 
cd /var/lib/jenkins/secrets

. ./aws_configure.sh

cd /var/lib/jenkins

sudo chown -R jenkins .kube
sudo chgrp -R jenkins .kube

. ./databasecredentials.sh

echo ${testvm_ip}
echo ${db_username}
echo ${db_endpoint}
echo ${testdb_endpoint}
echo ${password}
echo ${testdb_username}
aws eks --region eu-west-1 update-kubeconfig --name cne_cluster
cp /var/lib/jenkins/secrets.yaml /var/lib/jenkins/workspace/project3/Group-3-Final-Project/DevOps/kubernetes/secrets.yaml

cd /var/lib/jenkins/workspace/project3/Group-3-Final-Project/DevOps/kubernetes/

sudo kubectl delete -f secrets.yaml
sudo kubectl delete -f nginx.yaml
sudo kubectl delete -f nginx-lb.yaml
sudo kubectl delete -f nginx-conf.yaml
sudo kubectl delete -f backend.yaml
sudo kubectl delete -f frontend.yaml

sudo kubectl create namespace group3
sudo kubectl delete pods --all pods --namespace=group3
sudo kubectl apply -f secrets.yaml
sudo kubectl apply -f frontend.yaml
sudo kubectl apply -f backend.yaml
sudo kubectl apply -f nginx-conf.yaml
sudo kubectl apply -f nginx.yaml 
sudo kubectl apply -f nginx-lb.yaml

sleep 20

sudo kubectl get svc nginx-lb

echo "Done"
