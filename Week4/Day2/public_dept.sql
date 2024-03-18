CREATE TABLE dept(
 dept_no SERIAL PRIMARY KEY,
 dept_name VARCHAR (50) NOT NULL,
 dept_loc VARCHAR (50) NOT NULL
);

INSERT INTO dept (dept_name, dept_loc) 
VALUES
('Accounting', 'New York'),
('Research', 'Dallas'),
('Sales', 'Chicago'),
('Operations', 'Boston');

SELECT dept_name, dept_loc
FROM dept
ORDER BY dept_name ASC;