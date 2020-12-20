//acii-art logo npm package
// OBJECTIVE
// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles
//TODO install mysql and inquirer packages
const mysql = require("mysql");
const inquirer = require("inquier");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // todo add database to work off of
    //Your password and database name
    password: "lunaluna",
    database: ""
  });
  connection.connect(function(err) {
    if (err) throw err;
    
  });

//todo add in inquirer prompts to add or move around employees