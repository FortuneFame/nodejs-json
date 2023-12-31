# Онлайн-Магазин API

1. Клонировать репозиторий:
 - `git clone https://github.com/FortuneFame/nodejs-json.git`
2. Установить все зависимости:  
 - `npm ci`
3. Запустить сервер:
 - `npm start`

## Доступные методы:

1. Получить список всех товаров
 - URL: `http://localhost:3000/api/products`
 - Метод: GET
 - Описание: Возвращает список всех товаров.

2. Получить товар по ID
 - URL: `http://localhost:3000/api/products/{id}`
 - Метод: GET
 - Описание: Возвращает товар по его ID.

3. Поиск товаров по названию или цене
 - URL: `http://localhost:3000/api/search`
 - Метод: GET
 - Описание: Поиск товаров по названию или цене.

4. Добавить новый товар
 - URL: `http://localhost:3000/api/products`
 - Метод: POST
 - Описание: Добавляет новый товар.

5. Обновить товар по ID
 - URL: `http://localhost:3000/api/products/{id}`
 - Метод: PUT
 - Описание: Обновляет товар по его ID.

6. Удалить товар по ID
 - URL: `http://localhost:3000/api/products/{id}`
 - Метод: DELETE
 - Описание: Удаляет товар по его ID.

## Примеры запросов для Postman:

1. Получить список всех товаров
 - URL: `http://localhost:3000/api/products`
 - Метод: GET

2. Получить товар по ID
 - URL: `http://localhost:3000/api/products/1`
 - Метод: GET

3. Поиск товаров по названию или цене
 - URL: `http://localhost:3000/api/search?title=Fjallraven`
 - Метод: GET

 - URL: `http://localhost:3000/api/search?price=100`
 - Метод: GET

 - URL: `http://localhost:3000/api/search?title=Fjallraven&price=100`
 - Метод: GET

4. Добавить новый товар
 - URL: `http://localhost:3000/api/products`
 - Метод: POST
 - Тело запроса: JSON-объект с информацией о новом товаре. Например:
```json 
{
    "title": "Новый товар",
    "price": 50.99,
    "description": "Описание нового товара",
    "category": "Категория товара"
}
```

5. Обновить товар по ID
 - URL: `http://localhost:3000/api/products/21`
 - Метод: PUT
 - Тело запроса: JSON-объект с обновленной информацией о товаре. Например:
```json 
{
    "title": "Обновленный товар",
    "price": 60.99,
    "description": "Обновленное описание товара",
    "category": "Категория товара"
}
```

6. Удалить товар по ID
 - URL: `http://localhost:3000/api/products/21`
 - Метод: DELETE

## Ошибки:
1. Товар по ID не найден: Если пользователь пытается получить товар по ID, который не существует в вашем списке, API вернет:

 - `"error": "Product not found"`

2. Нет товаров, соответствующих указанной цене:
 - `"error": "No products found matching the specified price."`

3. Нет товаров, соответствующих указанному названию: 
 - `"error": "No products found matching the specified title."`

4. Неверные или отсутствующие параметры запроса: Если пользователь не предоставил параметры title или price в запросе поиска, API вернет:
 - `"error": "Provide title or price for search."`

