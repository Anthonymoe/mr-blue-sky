--db name mr-blue-sky


--user table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--entry table
CREATE TABLE "entry" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT, 
	"mood" INT,
	"weather" INT,
	"comment" VARCHAR (1000),
	"date" VARCHAR (9)
);