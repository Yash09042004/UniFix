#!/bin/bash
# filepath: frontend/public/scripts/Security_Hardening.sh

echo "Docker security hardening..."

echo "Checking for containers running as root:"
docker ps --format '{{.ID}}: {{.Names}}' | while read id_name; do
  id=$(echo $id_name | cut -d: -f1)
  if [ "$(docker inspect --format='{{.Config.User}}' $id)" = "" ]; then
    echo "Warning: $id_name is running as root"
  fi
done
echo "Consider using user namespaces and seccomp profiles."