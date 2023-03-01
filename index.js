const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { generateMainPage } = require('./src/scripts');

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
                    console.log("\nperfect. Your team members is updated!\nLet\'s proceed to build your awesome team page...\n==============\n\n");
                    buildTeam()
                } else {
                    return console.log("No Team to Build.")
                }
            }
        }
        )
    }
    function addEmployee() {
        console.log("Adding employee details...\n")
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is the employee name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What is the employee email address?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'What is the employee employee id:',
                    name: 'id',
                },
                {
                    type: 'list',
                    message: "What is the employee job role?",
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
        console.log("Adding New Manager...\n")
        
        inquirer
            .prompt({
                type: 'input',
                message: 'What is the manager\'s Office Number?',
                name: 'officeNumber',
            })
            .then((response) => {
                employeeData.officeNumber = response.officeNumber;
                const manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.officeNumber)
                TeamArray.push(manager);
                // Confirmation message
                console.log(`\nManager ${employeeData.name} was added to the team!\n==============\n\n`)

                start();
            })
    }

    function addEngineer(employeeData) {
        console.log("Adding New Engineer...\n")

        inquirer
            .prompt({
                type: 'input',
                message: 'What is the Engineer\'s Github username?',
                name: 'Github',
            })
            .then((response) => {
                employeeData.Github = response.Github;
                const engineer = new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.Github)
                TeamArray.push(engineer);
                // Confirmation message
                console.log(`\nEngineer ${employeeData.name} was added to the team!\n==============\n\n`)

                start();
            })
    }

    function addIntern(employeeData) {
        console.log("Adding New Intern...\n")

        inquirer
            .prompt({
                type: 'input',
                message: 'What is the intern\'s School Name?',
                name: 'schoolName',
            })
            .then((response) => {
                employeeData.schoolName = response.schoolName;
                const intern = new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.schoolName)
                TeamArray.push(intern);
                // Confirmation message
                console.log(`\nIntern ${employeeData.name} was added to the team!\n==============\n\n`)

                start();
            })
    }

    function buildTeam() {
        // Todo: Take team array and gernerate an HTML page in dist folder using fs
        // call to page generator using team data
        generateMainPage(TeamArray);
    }

    console.log("Hello! \nReady to generate your new team? \nPlease respond to the questions below to generate your team page.\n==============\n\n");

    start();

    