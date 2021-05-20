DROP DATABASE IF EXISTS buzy_bees;
CREATE DATABASE buzy_bees;

USE buzy_bees;

CREATE TABLE user_profile (
    user_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(100),
    email VARCHAR,
    password VARCHAR
);

CREATE TABLE calendar (
    cal_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    cal_name VARCHAR(100),
    created_by INT
);

CREATE TABLE calendar_item (
	item_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    item_cat VARCHAR(100),
    item_title VARCHAR,
    item_desc TEXT,
    item_date DATE,
    item_time INT,
    cal_id INT,
    created_by INT,
    isPrivate BOOLEAN
);

CREATE TABLE calendar_member (
    cal_mem_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	cal_id INT,
    user_id VARCHAR(140)
);

CREATE TABLE category (
	cat_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    cat_desc VARCHAR(30)
);