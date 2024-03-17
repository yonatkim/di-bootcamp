CREATE TABLE students(
 student_id SERIAL PRIMARY KEY,
 last_name VARCHAR (50) NOT NULL,
 first_name VARCHAR (50) NOT NULL,
 birth_date DATE NOT NULL
);

INSERT INTO students (last_name, first_name, birth_date)
VALUES
('Marc','Benichou','02/11/1998'),
('Yoan','Cohen','03/12/2010'),
('Lea','Benichou','27/07/1987'),
('Amelia','Dux','07/04/1996'),
('David','Grez','14/06/2003'),
('Homer','Simpson','03/10/1980');

SELECT * FROM bootcamp.students
ORDER BY student_id ASC;

SELECT first_name, last_name FROM bootcamp.students
ORDER BY student_id ASC;

SELECT first_name, last_name FROM bootcamp.students
WHERE student_id = 2;

SELECT first_name, last_name FROM bootcamp.students
WHERE last_name = 'Benichou' AND first_name = 'Marc';

SELECT first_name, last_name FROM bootcamp.students
WHERE last_name = 'Benichou' OR first_name = 'Marc';

SELECT first_name, last_name FROM bootcamp.students
WHERE first_name LIKE '%a%';

SELECT first_name, last_name FROM bootcamp.students
WHERE first_name ILIKE 'a%';

SELECT first_name, last_name FROM bootcamp.students
WHERE first_name LIKE '%a';

SELECT first_name, last_name FROM bootcamp.students
WHERE first_name LIKE '%a_';

SELECT first_name, last_name FROM bootcamp.students
WHERE student_id = 1 OR student_id = 3;

SELECT * FROM bootcamp.students
WHERE birth_date >= DATE '01/01/2000';



