#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "Starting build process..."

# Check Node.js version
echo "Checking Node.js version..."
node --version

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if MongoDB URI is set
if [ -z "$MONGODB_URI" ]; then
  echo "❌ Error: MONGODB_URI environment variable is not set"
  exit 1
fi

# Verify package.json
echo "Checking package.json..."
cat package.json

# Start the server
echo "Starting the server..."
node index.js 