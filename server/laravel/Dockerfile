FROM php:8.1-fpm

WORKDIR /var/www
RUN apt-get update && apt-get install -y \
    libpq-dev \
    build-essential \
    libpng-dev \
    libzip-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    curl \
    zip \
    unzip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    git

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_pgsql zip exif pcntl
RUN docker-php-ext-configure gd  --with-jpeg=/usr/include/ --with-freetype=/usr/include/
RUN docker-php-ext-install gd

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www
COPY . /var/www
COPY --chown=www:www . /var/www

USER www

#ENTRYPOINT bin/composer-installer.sh ; ["php", "artisan", "serve", "--host=0.0.0.0", "--port=56"]
EXPOSE 9000

# Запустите ваше приложение
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=56"]
