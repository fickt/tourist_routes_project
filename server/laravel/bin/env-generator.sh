#!/bin/bash
    echo "env-generator.sh script is running..."
if [ -f .env ]; then
    echo ".env file already exists in the project root. Skipping..."
else
    php artisan key:generate
    php artisan jwt:secret --force
fi
