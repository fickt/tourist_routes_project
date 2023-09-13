#!/bin/bash

echo "composer-installer.sh script is running..."
if [ -d "vendor" ]; then
    echo "Vendor directory already exists. Skipping composer install..."
    php artisan cache:clear
    php artisan optimize
else
    echo "Vendor directory not found.. composer install is running..."
    composer install --ignore-platform-reqs

    echo "composer update is running..."
    php artisan cache:clear
    php artisan optimize
fi
