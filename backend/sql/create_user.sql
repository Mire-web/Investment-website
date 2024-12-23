CREATE database spark;
USE spark;
CREATE TABLE users (
    id int AUTO_INCREMENT PRIMARY KEY,
    account varchar(80),
    category int,
	email VARCHAR(50),
    password varchar(80),
    UNIQUE (account)
);
INSERT INTO users (account, category, email, password) VALUES ('admin', 0, 'admin@minerswealth.com', SHA2('admin', 256));
INSERT INTO users (account, category, email, password) VALUES ('test', 1, 'test@gmail.com', SHA2('test', 256));
