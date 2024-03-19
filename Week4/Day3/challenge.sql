-- part 1
-- 1
CREATE TABLE IF NOT EXISTS customer
(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR (70) NOT NULL,
    last_name VARCHAR (70) NOT NULL
);
CREATE TABLE IF NOT EXISTS profile
(
    profile_id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id integer REFERENCES customer (customer_id) ON DELETE CASCADE
);
-- 2
INSERT INTO customer (first_name, last_name)
VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');
-- 3
INSERT INTO profile (isLoggedIn, customer_id)
VALUES 
(true, 
(SELECT customer.customer_id FROM customer WHERE first_name = 'John')),
(false, 
(SELECT customer.customer_id FROM customer WHERE first_name = 'Jerome'));
-- 4a
SELECT c.first_name, p.isLoggedIn
FROM customer c
INNER JOIN profile p
ON c.customer_id = p.customer_id
WHERE p.isLoggedIn = true;
-- 4b
SELECT c.first_name, p.isLoggedIn
FROM customer c
LEFT JOIN profile p
ON c.customer_id = p.customer_id;
-- 4c
SELECT COUNT(*)
FROM customer
INNER JOIN profile
ON customer.customer_id = profile.customer_id
WHERE profile.isLoggedIn = false;
-- part 2
-- 1
CREATE TABLE IF NOT EXISTS book
(
    book_id SERIAL PRIMARY KEY,
    title VARCHAR (70) NOT NULL,
    author VARCHAR (70) NOT NULL
);
-- 2
INSERT INTO book (title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Haper Lee');
-- 3
CREATE TABLE IF NOT EXISTS student
(
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR (70) NOT NULL,
    age SMALLINT NOT NULL,
	CHECK (age<=15)
);
-- 4
INSERT INTO student (student_name, age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);
-- 5
CREATE TABLE IF NOT EXISTS library
(
    borrowed_date DATE NOT NULL,
    book_id integer REFERENCES book(book_id) NOT NULL,
    student_id integer REFERENCES student(student_id) NOT NULL,
    PRIMARY KEY (book_id, student_id)
);
-- 6
INSERT INTO library (borrowed_date, book_id, student_id)
VALUES
('2022-02-15', 
(SELECT book_id from book WHERE title = 'Alice In Wonderland'),
(SELECT student_id from student WHERE student_name = 'John')),
('2021-03-03', 
(SELECT book_id from book WHERE title = 'To kill a mockingbird'),
(SELECT student_id from student WHERE student_name = 'Bob')),
('2021-05-23', 
(SELECT book_id from book WHERE title = 'Alice In Wonderland'),
(SELECT student_id from student WHERE student_name = 'Lera')),
('2021-08-12', 
(SELECT book_id from book WHERE title = 'Harry Potter'),
(SELECT student_id from student WHERE student_name = 'Bob'));
-- 7a
SELECT * FROM library;
-- 7b
SELECT s.student_name, b.title
FROM student s
INNER JOIN library USING (student_id)
INNER JOIN book b USING (book_id);
-- 7c
SELECT ROUND(AVG(s.age), 2)
FROM student s
INNER JOIN library USING (student_id)
INNER JOIN book b USING (book_id)
WHERE b.title = 'Alice In Wonderland'
GROUP BY b.title;
-- 7d
DELETE FROM student WHERE student_name='Lera';
-- Error returned:
-- ERROR:  Key (student_id)=(2) is still referenced from table "library".update or delete on table "student" violates foreign key constraint "library_student_id_fkey" on table "library" 
-- ERROR:  update or delete on table "student" violates foreign key constraint "library_student_id_fkey" on table "library"
-- SQL state: 23503
-- Detail: Key (student_id)=(2) is still referenced from table "library".
-- Solution:
CREATE TABLE IF NOT EXISTS library
(
    borrowed_date DATE NOT NULL,
    book_id integer REFERENCES book(book_id) ON DELETE CASCADE NOT NULL,
    student_id integer REFERENCES student(student_id) ON DELETE CASCADE NOT NULL,
    PRIMARY KEY (book_id, student_id)
);
