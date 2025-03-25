# Fast-food restaruant uchun Backend API 🍔

## Loyihaning maqsadi: 🎯

- biror bir fast food restorani uchun menyularni ko'tish va ovqatlarga buyurtma berish imkoniyatini beruvchi BackEnd API'ni ishlab chiqish.

## Funksional talablar:

- Barcha taomlarni category'laru bo'lishi kerak. Misol: Burgers, Pizzas, e.g
- Har bir taom biron category'ga mansub bo'lishi kerak.
- Taomning 1ta rasmi, nomi, narxi, description bo'lishi kerak.
- Foydaluvchi ro'yxatdan o'tmagan holatda ham category va taomlarni ko'ra olishi kerak.
- Foydalanuvchi email va name bilan ro'yxatdan o'tadi.
- Profilga kirish email orqali bo'ladi.
- Foydalanuvchi savatga mahsulotlar qo'sha olishi kerak.
- Foydalanuvchi prodilida o'z zakazlar tarixini ko'ra olishi kerak.
- Foydalanuvchi prodilini yangilay olishi kerak.

## Nofunksional talablar:✅

- Tezlik
- Xavfsizlik
- Kengaya oladigan bo'lishi kerak

## Database models:

1. Category:

- id
- name
- created_at
- updated_at

2. Product:

- id
- name
- price
- description
- imgUrl
- category_id (FK)
- created_at
- updated_at

3. User:

- id
- name
- email
- imgUrl
- created_at
- updated_at

4. Order:

- id
- created_at
- total_price
- user_id (FK)


5. OrderItem:

- count
- order_id (FK)
- product_id (FK)
