# tourist_routes_project
Как поднять приложение:

Создаем в корне проекта .env файл, в него копируем содержимое из файла .env.example,
внутри .env в переменную DB_PASSWORD присваиваем значение root

Вводим в терминал:
1) docker compose build (только если в первый раз разворачиваете контейнеры)
2) docker compose up
3) docker exec app php artisan migrate:fresh (Накатит таблицы в базу данных и снесёт старые записи, 
   если они были конечно... Вводить, если в первый раз разворачиваете контейнеры, 
   если введете повторно, ничего страшного не произойдет, просто перезапишет БД)

Если в первый раз разворачиваете контейнеры,
значит будут устанавливаться зависимости,
через приложение Docker Desktop зайдите в app контейнер
и дождитесь, пока в логах не появится строчка "NOTICE: ready to handle connections",
это значит, что все зависимости подтянулись и можно кидать запросы.

Если делаете какие-то изменения в коде, чтобы изменения появились
и в докер контейнере, вводите команду: docker compose build client
(ну или app, если изменения были в директории server, где код от бэкенда лежит)

## Документация
1) Файлик swagger_tourist_routes_sputnik.v.1.0.yaml можно вставить в https://editor.swagger.io/,
типа документация, какие эндпоинты, какой JSON на вход/выход ожидается

2) Если нужны постман тесты, в корне лежит файлик tourist_routes_project_sputnik.postman_collection.json

## Баги

1) Fatal error: Uncaught Error: Failed opening required 'var/www/vendor/autoload.php'
   Решение: пропишите в терминал docker exec app composer update --no-scripts --ignore-platform-req=ext-sockets

2) "There is no existing directory at \storage\logs\" and it could not be created: No such file or directory"
    Решение: пропишите в терминал две команды 1) docker exec app php artisan cache:clear
                                              2) docker exec app php artisan optimize       