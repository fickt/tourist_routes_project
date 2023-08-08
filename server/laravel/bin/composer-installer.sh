#!/bin/bash

echo "composer-installer.sh script is running..."
if [ -d "vendor" ]; then
    echo "Vendor directory already exists. Skipping composer install..."
else
    composer install --ignore-platform-reqs
fi
