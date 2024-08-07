#!/bin/bash

# Navigate to the repository directory
cd /home/ubuntu/MedocHealth.github.io

# Install Node.js and npm if not already installed
if ! command -v node &> /dev/null
then
  curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# Install project dependencies and build the project
npm install
npm run build

# Install Nginx if not already installed
if ! command -v nginx &> /dev/null
then
  sudo apt-get update
  sudo apt-get install -y nginx
fi
