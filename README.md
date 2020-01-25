npm i && npm run start

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Отображать список объектов и расширенную информацию

    Необходимо получить из JSON API список объектов недвижимости. У каждого есть заголовок, цена, адрес, превью-изображение и уникальный идентификатор (id). На главной странице их нужно отобразить списком выведя всю доступную информацию о них.
    При клике на отдельный элемент, так же из JSON API, используя id, нужно получить расширенную информацию о нём и вывести на отдельной странице. На ней дополнительно будет присутствовать описание, имя продавца, и простая галерея фотографий с возможностью пролистывания

Требования

    Проект запускается и работает на localhost
    Использовать систему контроля версий git
    Зависимости не хранятся в проекте, а инсталятся через npm
    Можно использовать любые современные фрэйворки и библиотеки (React, Vue, Angular, TypeScript), либо нативный Javascript

Методы для получения данных (JSON API)

    Список методов API http://134.209.138.34/
    Список объектов http://134.209.138.34/items
    Расширенная информация об объекте http://134.209.138.34/item/:id (пример http://134.209.138.34/item/1849621339)

Хорошо если будет

    Проект выложен на Github/Bitbucket
    Простой запуск, вроде двух команд npm i npm run start
