#!/bin/bash

if ! which npm > /dev/null; then
        sudo apt update -y
        curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -
        sudo apt-get install -y nodejs
        echo "The npm version is:"
        npm --version
else 
        echo 'already installed'
fi