DROP DATABASE IF EXISTS iskollection; 
CREATE DATABASE iskollection;
USE iskollection;

CREATE TABLE users(
	firstName VARCHAR(50) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
	email VARCHAR (50) NOT NULL,
	password VARCHAR(50),
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);  

INSERT INTO users VALUES
(
	'David Ralph',
	'Benavidez',
	'ddbenavidez2@up.edu.ph',
	'password',
	NULL
),
(
	'Jefferson Louise',
	'Basilio',
	'jcbasilio@up.edu.ph',
	'password',
	NULL
);