CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
);

INSERT INTO actors (first_name, last_name, age, number_oscars) 
VALUES
('Matt','Damon','08/10/1970', 5),
('George','Clooney','06/05/1961', 2),
('Taehyung','Kim','30/12/1995', 3),
('Ji-eun','Lee','16/05/1993', 3),
('Gal','Gadot','30/04/1985', 4);

SELECT * FROM public.actors
ORDER BY actor_id ASC; 

SELECT COUNT(*) FROM public.actors;