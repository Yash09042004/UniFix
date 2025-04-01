#!/bin/bash
# Install MongoDB

echo "Installing MongoDB..."

sudo apt update
sudo apt install -y mongodb
sudo systemctl enable mongodb
sudo systemctl start mongodb

echo "MongoDB installation complete!"

