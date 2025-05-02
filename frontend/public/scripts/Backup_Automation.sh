#!/bin/bash
# Backup Automation Script
# Description: Automated system backup and recovery solution

echo "========== Backup Automation Tool =========="

# Configuration - Change these variables
BACKUP_DIR="/home/$(whoami)/backups/$(date +%Y-%m-%d)"
DIRECTORIES_TO_BACKUP=("/home/$(whoami)/Documents" "/home/$(whoami)/Pictures")
BACKUP_FILENAME="backup_$(date +%Y-%m-%d).tar.gz"
LOG_FILE="/home/$(whoami)/backup_log.txt"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

echo "Starting backup process at $(date)" | tee -a "$LOG_FILE"
echo "Backing up to: $BACKUP_DIR/$BACKUP_FILENAME" | tee -a "$LOG_FILE"

# Create list of directories to backup
echo -e "\nDirectories to backup:" | tee -a "$LOG_FILE"
for dir in "${DIRECTORIES_TO_BACKUP[@]}"; do
    echo "- $dir" | tee -a "$LOG_FILE"
    if [ ! -d "$dir" ]; then
        echo "  WARNING: Directory '$dir' does not exist!" | tee -a "$LOG_FILE"
    fi
done

# Create the backup
echo -e "\nCreating backup archive..." | tee -a "$LOG_FILE"
tar -czf "$BACKUP_DIR/$BACKUP_FILENAME" "${DIRECTORIES_TO_BACKUP[@]}" 2>/dev/null
if [ $? -eq 0 ]; then
    echo "Backup completed successfully!" | tee -a "$LOG_FILE"
    echo "Backup size: $(du -h "$BACKUP_DIR/$BACKUP_FILENAME" | cut -f1)" | tee -a "$LOG_FILE"
else
    echo "ERROR: Backup failed!" | tee -a "$LOG_FILE"
fi

# Verify backup integrity
echo -e "\nVerifying backup integrity..." | tee -a "$LOG_FILE"
tar -tzf "$BACKUP_DIR/$BACKUP_FILENAME" >/dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "Verification successful! Backup is valid." | tee -a "$LOG_FILE"
else
    echo "ERROR: Backup verification failed!" | tee -a "$LOG_FILE"
fi

echo -e "\n========== Backup Process Complete =========="
echo "Backup location: $BACKUP_DIR/$BACKUP_FILENAME"
echo "Log file: $LOG_FILE"
echo -e "\nTo restore files from this backup, use:"
echo "mkdir -p /tmp/restore"
echo "tar -xzf $BACKUP_DIR/$BACKUP_FILENAME -C /tmp/restore"