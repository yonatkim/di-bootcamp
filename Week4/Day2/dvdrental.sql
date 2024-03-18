-- 1
SELECT * FROM customer
ORDER BY customer_id ASC;
-- 2
SELECT customer_id, store_id, CONCAT(first_name,' ',last_name) AS full_name
FROM customer
ORDER BY full_name ASC;
-- 3
SELECT DISTINCT create_date FROM customer;
-- 4
SELECT *
FROM customer
ORDER BY first_name DESC;
-- 5
SELECT film_id, title, description, release_year, rental_rate, rating
FROM film
ORDER BY rental_rate;
-- 6
SELECT CONCAT(customer.first_name, ' ', customer.last_name) as fullname,
address.address, address.district, address.phone
FROM customer, address
WHERE  customer.address_id =address.address_id
AND address.district='Texas';
-- 7
SELECT *
FROM film
WHERE film_id = 15 OR film_id = 150;
-- 8
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Wonder Woman';
-- 9
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'Wo%';
-- 10
SELECT film_id, title
FROM film
ORDER BY rental_rate
LIMIT 10;
-- 11
SELECT film_id, title
FROM film
ORDER BY rental_rate
OFFSET 10 ROWS 
FETCH FIRST 10 ROW ONLY; 
-- 12
SELECT CONCAT(customer.first_name, ' ', customer.last_name) as fullname,
payment.amount, payment.payment_date
FROM customer, payment
WHERE  customer.customer_id = payment.customer_id
ORDER BY customer.customer_id;
-- 13
SELECT *
FROM film
WHERE film_id NOT IN
  (SELECT film_id  
  FROM inventory);
-- 14
SELECT city.city, country.country
FROM city, country
WHERE city.country_id = country.country_id;
-- 15
SELECT CONCAT(customer.first_name, ' ', customer.last_name) as customer,
payment.amount, payment.payment_date, 
CONCAT(staff.first_name, ' ', staff.last_name) as seller
FROM customer, payment, staff
WHERE customer.customer_id = payment.customer_id
AND payment.staff_id = staff.staff_id
ORDER BY staff.staff_id;