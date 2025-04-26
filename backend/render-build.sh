#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "Installing dependencies..."
npm install

echo "Checking package.json..."
cat package.json

echo "Verifying node version..."
node --version

echo "Starting the server..."
node index.js 