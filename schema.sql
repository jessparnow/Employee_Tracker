DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY(id),
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
role_id INT,
manager_id INT,
FOREIGN KEY (role_id) REFERENCES employee_role (id) ON DELETE CASCADE,
FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE CASCADE
);
CREATE TABLE employee_role (
id INT not null AUTO_INCREMENT,
PRIMARY KEY(id),
employee_title VARCHAR(50) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES departments (id) ON DELETE CASCADE
);
CREATE TABLE departments (
id INT not null AUTO_INCREMENT,
PRIMARY KEY(id),
department_name VARCHAR(50) NOT NULL
);
INSERT INTO departments (department_name)
VALUES ('Sales'), ('Finance'), ('Legal'), ('Engineering');

INSERT INTO employee (first_name, last_name)
VALUES ('Peter', 'Peterson');

INSERT INTO employee_role (employee_title, salary, department_id)
VALUES ('Sales Person', 100000, 1);
