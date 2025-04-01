#!/bin/bash
# Install PostgreSQL

echo "Installing PostgreSQL..."

sudo apt update
sudo apt install -y postgresql postgresql-contrib
sudo systemctl enable postgresql
sudo systemctl start postgresql

echo "PostgreSQL installation complete!"

