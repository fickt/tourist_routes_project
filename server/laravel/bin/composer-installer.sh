#!/bin/bash

echo "composer-installer.sh script is running..."
if [ -d "vendor" ]; then
    echo "Vendor directory already exists. Skipping composer install..."
    php artisan cache:clear
    php artisan optimize
else
    echo "Vendor directory not found.. composer install is running..."
    composer install --ignore-platform-reqs

    #Чтобы избежать всяких косяков, что он не может найти папку vendor и т.д
    echo "composer update is running..."
    composer update --no-scripts --ignore-platform-req=ext-sockets
fi
