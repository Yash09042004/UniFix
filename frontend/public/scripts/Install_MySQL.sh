#!/bin/bash
# Install MySQL

echo "Installing MySQL..."

sudo apt update
sudo apt install -y mysql-server
sudo systemctl enable mysql
sudo systemctl start mysql

echo "MySQL installation complete!"

