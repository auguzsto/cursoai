FROM php:8.2-cli
COPY . /usr/src/backend
WORKDIR /usr/src/backend
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql
CMD [ "php", "-S", "0.0.0.0:8000", "-t", "." ]