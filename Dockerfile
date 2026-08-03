FROM php:8.2-cli-alpine

# Install PHP extensions for PostgreSQL, GD, Zip, MBString
RUN apk add --no-cache \
    postgresql-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    nodejs \
    npm \
    git \
    unzip \
    bash

RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_pgsql zip gd bcmath

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy project files
COPY . .

# Build frontend SPA
RUN cd frontend && npm install && npm run build

# Build backend
RUN cd backend && composer install --no-dev --optimize-autoloader

# Copy built frontend assets into backend public directory
RUN cp -r frontend/dist/* backend/public/

WORKDIR /app/backend

EXPOSE 8000

CMD ["sh", "-c", "php artisan migrate --force && php artisan config:cache && php artisan route:cache && php artisan view:cache && php artisan serve --host=0.0.0.0 --port=${PORT:-8000}"]
