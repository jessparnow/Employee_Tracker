//acii-art logo npm package
// OBJECTIVE
// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles
// const asciiart = require("asciiart")
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    //Your password and database name
    password: "lunaluna",
    database: "employee_tracker_db"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected...');
    runSearch();
  });

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all Employees",
        "View all Employees by department",
        "View all Roles",
        "Add Employees",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View all Employees":
        employeeSearch();
        break;

      case "View all Employees by department":
        departmentSearch();
        break;

      case "View all Roles":
        roleSearch();
        break;

      case "Add Employees":
        addEmployee();
        break;

      case "exit":
        connection.end();
        break;
      }
    });
}

function employeeSearch() {
       var query = "SELECT * FROM employee";
      connection.query(query, function(err, res) {
        if (err) throw err;
        console.log('*hacker voice: Im in!');
        for (var i = 0; i < res.length; i++) {
          console.table([res[i].first_name, res[i].last_name]);
          // return res[i].last_name;
        }
        runSearch();
      });
};

function addEmployee() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "Employee First Name:"
      },
      {
        name: "lastName",
        type: "input",
        message: "Employee Last Name:"
      },
      {
        name: "employeeRole",
        type: "list",
        message: "Employees Role:",
        choices: [
          "Sales Manager",
          "Sales Person",
          "Lead Engineer",
          "Software Engineer",
          "Accounting",
          "Legal Team Lead",
          "Intern",
        ],
      }
    ])
    .then(function(answer) {
      console.log(answer);
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
        },
      
        function(err) {
          if (err) throw err;
          console.log("Congratulations on your new job!");
          runSearch();
        }
      );
    })
    .then(function(answer) {
      console.log(answer);
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO employee_role SET ?",
        {
          employee_title: answer.employeeRole
        },
      
        function(err) {
          if (err) throw err;
          console.log("Congratulations on your new job!");
          runSearch();
        }
      );
    });
}
