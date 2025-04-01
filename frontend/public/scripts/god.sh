#!/bin/bash

echo '#!/bin/bash
# Install Docker

echo "Installing Docker..."

sudo apt update
sudo apt install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker

echo "Docker installation complete!"
' > Install_Docker.sh

echo '#!/bin/bash
# Start Docker

echo "Starting Docker..."

sudo systemctl start docker

echo "Docker started successfully!"
' > Start_Docker.sh

echo '#!/bin/bash
# Enable Docker on boot

echo "Enabling Docker to start on boot..."

sudo systemctl enable docker

echo "Docker will now start on boot!"
' > Enable_Docker_on_Boot.sh

echo '#!/bin/bash
# Check Docker version

echo "Checking Docker version..."

docker --version

echo "Docker version check complete!"
' > Check_Docker_Version.sh

echo '#!/bin/bash
# Restart Docker service

echo "Restarting Docker service..."

sudo systemctl restart docker

echo "Docker service restarted successfully!"
' > Restart_Docker.sh

echo '#!/bin/bash
# Uninstall Docker

echo "Uninstalling Docker..."

sudo apt remove --purge -y docker.io
sudo apt autoremove -y

echo "Docker has been uninstalled successfully!"
' > Uninstall_Docker.sh

echo '#!/bin/bash
# Docker System Prune

echo "Pruning unused Docker data..."

docker system prune -f

echo "Unused Docker data cleaned up!"
' > Docker_System_Prune.sh

echo '#!/bin/bash
# Check Docker service status

echo "Checking Docker service status..."

sudo systemctl status docker

echo "Docker service status checked!"
' > Check_Docker_Service_Status.sh

echo '#!/bin/bash
# Docker Disk Usage

echo "Checking Docker disk usage..."

docker system df

echo "Docker disk usage checked!"
' > Docker_Disk_Usage.sh

echo '#!/bin/bash
# Reinstall Docker

echo "Reinstalling Docker..."

sudo apt remove --purge -y docker.io
sudo apt update
sudo apt install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker

echo "Docker reinstallation complete!"
' > Reinstall_Docker.sh

echo "All Docker issue resolution scripts have been created successfully!"
