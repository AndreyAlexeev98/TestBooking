# Осталось по проекту:

- Доделать миксины календаря и часов;
- Занести цвета в переменные;
- Пофиксить баг с кнопкой в карточке (когда страница загружена, по умолчанию кнопка должна быть с текстом "Выбрано");
- Закончить калькулятор записи (изменять финальную дату записи, сейчас изменяется только время записи);
- В каруселе переключения дней календаря, сделать чтобы второй месяц прижимался к правой границе контейнера); 
- Сделать адаптивную версию;
- Подравнять отступы и размеры элементов по макету в Pixel Perfect; 

# Документация к сборке

В ней есть оптимизация и минимизация:

1. JavaScript (babel)
2. SCSS
3. HTML (PUG)
4. Webpack-dev-server

----

## Установка

Склонируйте к себе репозиторий **git clone https://github.com/AndreyAlexeev98/TestBooking.git**

Запустите  **npm install**

---

##### Для разработки:

Команда **npm run dev**

Запускается dev-сервер, с обновлением после сохранения файлов и выводом ошибок

---

##### Для продакшена:

Команда - **npm run prod**

Создает/обновляет содержимое папки dist, которая содержит минимизированный / сжатый код

---