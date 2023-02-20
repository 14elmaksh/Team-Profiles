const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const TeamArray = [];

function start() {
    inquirer
        .prompt([{
            type: 'confirm',
            message: "Do you want to create a new employee?",
            name: 'choice',
            default: false,
        }])
        .then(response => {
            //console.log(response);
            if (response.choice) {
                addEmployee();
            } else {
                if (TeamArray.length > 0) {
                    buildTeam()
                } else {
                    return console.log("No Team to Build.")
                }
            }
        }
        )
    }
    function addEmployee() {
        console.log("addEmployee")
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What is your email address?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is your employee id:',
                    name: 'id',
                },
                {
                    type: 'list',
                    message: "What is your job role?",
                    choices: ["Manager", "Engineer", "Intern"],
                    name: "role"
                }
            ])
            .then((response) => {
                console.log({ response });
                switch (response.role) {
                    case "Manager":
                        addManager(response);
                        break;
                    case "Engineer":
                        addEngineer(response);

                        break;
                    case "Intern":
                        addIntern(response);

                        break;
                }


            });

    }

    function addManager(employeeData) {
        console.log("Adding New Manager...")
        // Todo: Add Inquierr questions to ask for Office Number

        // Todo: Take Answer and data passed from addEmployee function and create a new Manager variable

        // Todo: Add Manager variable to Team Array

        // Return to Start
    }

    function addEngineer(employeeData) {
        console.log("Adding New Engineer...")
        // Todo: Add Inquierr questions to ask for Github Username

        // Todo: Take Answer and data passed from addEmployee function and create a new Engineer variable

        // Todo: Add Engineer variable to Team Array

        // Return to Start
    }

    function addIntern(employeeData) {
        console.log("Adding New Intern...")
        // Todo: Add Inquierr questions to ask for School Name

        // Todo: Take Answer and data passed from addEmployee function and create a new School Name variable

        // Todo: Add School Name variable to Team Array

        // Return to Start
    }

    function buildTeam() {
        console.log("Building Team Page...")
        console.log(TeamArray);
        // Todo: Take team array and gernerate an HTML page is dist folder using fs
    }

    start();

    