# Онлайн-Магазин API

## Доступные методы:
1. Получить список всех товаров:
 - Пример запроса:
 `http://localhost:3000/api/products`

2. Получить товар по ID:
 - Пример запроса:
 `http://localhost:3000/api/products/1`

3. Поиск товаров по названию или цене:
 - Примеры запросов:
 `http://localhost:3000/api/search?title=Fjallraven`
 `http://localhost:3000/api/search?price=100`
 `http://localhost:3000/api/search?title=Fjallraven&price=100`
 `http://localhost:3000/api/search?price=100&title=Fjallraven`

## Ошибки:
1. Товар по ID не найден: Если пользователь пытается получить товар по ID, который не существует в вашем списке, API вернет:
`"error": "Product not found"`

2. Нет товаров, соответствующих указанной цене:
`"error": "No products found matching the specified price."`

3. Нет товаров, соответствующих указанному названию: 
`"error": "No products found matching the specified title."`

4. Неверные или отсутствующие параметры запроса: Если пользователь не предоставил параметры title или price в запросе поиска, API вернет:
`"error": "Provide title or price for search."`

