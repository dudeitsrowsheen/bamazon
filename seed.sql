CREATE DATABASE bamazon;

USE bamazon;

CREATE table products
(
	item_id int AUTO_INCREMENT,
        -- auto increment mostly only for ID-- 
    -- auto increment (cant ever go back to 0)
    product_name VARCHAR(100) not null,
    -- varchar is a string-- not null means you need to enter something
    department_name VARCHAR(100) not null,
    price INT(10),
    stock_quantity INT(10),
    -- no comma needed on last, like a sentence
    primary key(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("blush", "beauty", 5, 10), 
("bronzer", "beauty", 9, 5),
("extensions", "beauty", 30, 6),
("nail polish", "beauty", 5, 11),
("hair color", "beauty", 15, 20),
("hair brush", "beauty", 10, 3),
("eye liner", "beauty", 10, 6),
("mascara", "beauty", 10, 9),
("highlighter", "beauty", 10, 8),
("eye shadow", "beauty", 10, 9)
;

