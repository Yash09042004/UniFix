#!/bin/bash
# filepath: /home/yash/UniFix/frontend/public/scripts/Configuration_Management.sh

echo "========== Configuration Management =========="

CONFIG_DIR="$HOME/.config"
BACKUP_DIR="$HOME/config_backup_$(date +%Y%m%d_%H%M%S)"

echo "Backing up configuration files from $CONFIG_DIR to $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"
cp -r "$CONFIG_DIR"/* "$BACKUP_DIR"/

echo "Listing configuration files:"
ls "$CONFIG_DIR"

echo "To restore a backup, copy files from $BACKUP_DIR to $CONFIG_DIR"
echo "Configuration management tasks complete."