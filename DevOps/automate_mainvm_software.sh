#! /bin/bash

#Update
sudo apt update

#Install python3
if ! which python3 > /dev/null; then
	echo "Installing Pyton3"
	sleep 1
	sudo apt install python3 -y
else
        echo "python3 already exist"

fi

#Install MySQL client
if ! which mysql > /dev/null; then
        echo "Installing mysql-client-core-5.7"
        sleep 1
        sudo apt install mysql-client-core-5.7 -y
else
        echo "mysql-client-core-5.7 already exist"

fi

#Install jq
if ! which jq > /dev/null; then
        echo "Installing jq"
        sleep 1
        sudo apt install jq -y
else
        echo "jq already exist"

fi

#Install python3-pip
if ! which pip3 > /dev/null; then
        echo "Installing python3-pip"
        sleep 1
        sudo apt install python3-pip -y
else
        echo "python3-pip already exist"

fi

#Install unzip
if ! which unzip > /dev/null; then
        echo "Installing unzip"
        sleep 1
        sudo apt install unzip -y
else
        echo "unzip already exist"

fi

#Install wget
if ! which wget > /dev/null; then
        echo "Installing wget"
        sleep 1
        sudo apt install wget -y
else
        echo "wget already exist"

fi

#Install curl
if ! which curl > /dev/null; then
        echo "Installing wget"
        sleep 1
        sudo apt install curl -y
else
        echo "curl already exist"

fi

#Install awscli
if [ ! -d ~/aws ]; then
        echo "Installing awscli"
        sleep 1
        curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
	unzip awscliv2.zip
	sudo ./aws/install
	mv ./aws ~/aws
	rm awscliv2.zip
else
        echo "awscli already exist"

fi


#Install terraform
if ! which terraform > /dev/null; then
        echo "Installing terraform"
        sleep 1
	wget https://releases.hashicorp.com/terraform/0.14.2/terraform_0.14.2_linux_amd64.zip
        unzip terraform_*_linux_*.zip
	sudo mv terraform /usr/local/bin
	rm terraform_*_linux_*.zip
else
        echo "terraform already exist"

fi

#Install ansible
if ! which ansible > /dev/null; then
        echo "Installing ansible"
        sleep 1
        mkdir -p ~/.local/bin
	echo 'PATH=$PATH:~/.local/bin' >> ~/.bashrc
	source ~/.bashrc
	pip3 install --user ansible
	ansible --version
else
        echo "ansible already exist"

fi

