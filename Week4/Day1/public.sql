CREATE TABLE items(
 item_id SERIAL PRIMARY KEY,
 item_name VARCHAR (50) NOT NULL,
 price REAL NOT NULL
);
CREATE TABLE customers(
 customer_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL
);

INSERT INTO items (item_name, price) 
VALUES
('Small Desk', 100),
('Large Desk', 300),
('Fan', 80);

INSERT INTO customers (first_name, last_name) 
VALUES
('Greg','Jones'),
('Sandra','Jones'),
('Scott','Scott'),
('Trevor','Green'),
('Melanie','Johnson');

SELECT * FROM items;
SELECT * FROM customers;

SELECT item_name, price
FROM items
WHERE price > 80;

SELECT item_name, price
FROM items
WHERE price <= 300;

SELECT first_name, last_name
FROM customers
WHERE last_name != 'Smith';

SELECT first_name, last_name
FROM customers
WHERE last_name ILIKE 'Jones';

SELECT first_name, last_name
FROM customers
WHERE last_name NOT LIKE 'Scot%';