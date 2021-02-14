# Groupomania

--Projet OPENCLASSROOMS Groupomania-- Reseau social d'entreprise 

### Express, MySQL, JWT

## Prerequisites 

### Node and `npm` installed locally on your machine. 

### MySQL database:
 ```
CREATE TABLE user (id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT, nom VARCHAR(40) NOT NULL, prenom VARCHAR(40) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, isAdmin TINYINT, PRIMARY KEY (id)) ENGINE=INNODB;
 ```
 ```
CREATE TABLE post (id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT, post_title VARCHAR(255) NOT NULL, post TEXT, user_id SMALLINT UNSIGNED NOT NULL, date DATETIME NOT NULL, PRIMARY KEY (id)) ENGINE=INNODB;	
ALTER TABLE post ADD CONSTRAINT fk_post_user_id FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE;
```
```
CREATE TABLE comment(id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT, post_id SMALLINT UNSIGNED, comment TEXT NOT NULL, user_id SMALLINT UNSIGNED NOT NULL, date DATETIME NOT NULL, PRIMARY KEY (id)) ENGINE=INNODB;
ALTER TABLE comment ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE;
ALTER TABLE comment ADD CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE;
```


## Installation ##

Clone this repo. From within the project folder, run `npm install`. You 
can then run the server with `node server`. 
## ##
Repository de l'application Vue :  https://github.com/AntoinePereira/groupo-front