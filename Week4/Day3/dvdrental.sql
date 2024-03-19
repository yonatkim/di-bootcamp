-- exercise 1
-- 1
SELECT name as language FROM language;
-- 2a
SELECT film.title, film.description,
language.name as language
FROM film
INNER JOIN language
ON film.language_id = language.language_id;
-- 2b
SELECT film.title, film.description,
language.name as language
FROM film, language
WHERE film.language_id = language.language_id;
-- 3
SELECT language.name as language,
film.title, film.description
FROM language
LEFT JOIN film
ON language.language_id = film.language_id;
-- 4
CREATE TABLE IF NOT EXISTS new_film
(
    film_id SERIAL PRIMARY KEY,
    film_name VARCHAR (150) NOT NULL
);
INSERT INTO new_film (film_name)
VALUES
('Crash Landing on You'),
('Vincenzo'),
('Healer'),
('Goblin'),
('Uncanny Counter'),
('Six Flying Dragons');
-- 5
CREATE TABLE customer_review
(
    review_id SERIAL PRIMARY KEY,
    title VARCHAR (50) NOT NULL,
    score SMALLINT NOT NULL,
    review_text VARCHAR (300) NOT NULL,
    last_update DATE NOT NULL,
    language_id integer REFERENCES language (language_id),
    film_id integer REFERENCES new_film (film_id) ON DELETE CASCADE
);
-- 6
INSERT INTO public.language (name, last_update) 
VALUES 
('Korean', '2024-03-19 14:27:31'::timestamp without time zone);

INSERT INTO customer_review 
(title, score, review_text, last_update, film_id, language_id)
VALUES
('Awesome Movie', 9, 'Most unique romance film ever!', '2024-03-19', 1, 7),
('Best Mafia Film', 8, 'Was on the edge of my seat every second of the film!', '2024-03-19', 2, 7),
('Must See!', 9, 'You will not regret seeing this action packed movie', '2024-03-19', 6, 7);
-- 7
DELETE 
DELETE FROM new_film
WHERE film_name  ILIKE 'vincenzo'
RETURNING film_id;
-- the associated customer_review with review_id = 2 was also deleted - see csv exports

-- exercise 2
--1
UPDATE film
SET language_id = 7
FROM language
WHERE film.language_id = language.language_id
AND film.description ILIKE '%japan%';
-- 2
-- store_id and address_id, ONLY already existing FKs can be inserted
-- 3
DROP TABLE IF EXISTS customer_review;
-- customer_review is the child table with no other tables depending on it 
-- So, dropping it is straight forward.
-- However, for tables with dependent tables, 
-- either RESTRICT (no drop if a dependent is found)
-- or CASCADE (drop all dependent children tables too) after the tablename can be used.
-- 4
SELECT COUNT(*) FROM rental
WHERE return_date is NULL;
-- 183 rentals where return_date is NULL
-- 5
SELECT rental.return_date, payment.amount 
FROM rental INNER JOIN payment
ON rental.rental_id = payment.rental_id
WHERE return_date is NULL
ORDER BY payment.amount DESC
FETCH FIRST 30 ROW ONLY;
-- 6a
SELECT 
f.title, f.description, a.first_name || ' ' || a.last_name AS fullname
FROM film f
INNER JOIN film_actor USING (film_id)
INNER JOIN actor a USING (actor_id) 
WHERE f.description ILIKE '%sumo wrestler%'
AND a.first_name ILIKE '%penelope%'
AND a.last_name ILIKE '%monroe%'
ORDER BY f.film_id;
-- 6b
SELECT 
f.title, f.description, c.name, f.rating, f.length
FROM film f
INNER JOIN film_category USING (film_id)
INNER JOIN category c USING (category_id) 
WHERE c.name ILIKE '%documentary%'
AND (f.length < 60 AND f.rating = 'R')
ORDER BY f.film_id;
-- 6c
SELECT 
DISTINCT f.title, MAX(r.return_date) AS latest_returndate, 
MIN(c.first_name || ' ' || c.last_name) AS fullname, 
MAX(p.amount) AS latest_amount, MIN(f.description) AS description, 
MIN(f.rating) AS rating, MIN(f.length) AS length
FROM film f
INNER JOIN inventory USING (film_id)
INNER JOIN rental r USING (inventory_id)
INNER JOIN customer c USING (customer_id)
INNER JOIN payment p USING (customer_id)
WHERE c.first_name ILIKE 'Matthew' AND c.last_name ILIKE 'Mahan'
AND (r.return_date >= '2005-07-28' AND r.return_date <= '2005-08-01')
AND p.amount > 4.00
GROUP BY f.title;
-- 6d
SELECT 
DISTINCT f.title, MIN(c.first_name || ' ' || c.last_name) AS fullname, 
MIN(f.description) AS description, MIN(f.rating) AS rating, 
MIN(f.length) AS length, MAX(f.replacement_cost) AS replacement_cost
FROM film f
INNER JOIN inventory USING (film_id)
INNER JOIN rental r USING (inventory_id)
INNER JOIN customer c USING (customer_id)
WHERE c.first_name ILIKE 'Matthew' AND c.last_name ILIKE 'Mahan'
AND (f.description ILIKE '%boat%' OR f.title ILIKE '%boat%')
GROUP BY f.title
ORDER BY replacement_cost DESC;
