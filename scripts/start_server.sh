#!/bin/bash

# Remove old build files
sudo rm -rf /var/www/html/*

# Copy new build files to Nginx root directory
sudo cp -r /home/ubuntu/MedocHealth.github.io/build/* /var/www/html/

# Restart Nginx to apply changes
sudo systemctl restart nginx
