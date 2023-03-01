const fs = require('fs');

// Functions for generating html code for each user role

function makeManager(member) {
    // return code in template literal
    return `
        <div class="employee">
            <div class="title">
                <span>${member.name} <span>- Manager</span></span>
            </div>
            <hr />
            <div class="particulars">
                <span class="lead">Employee ID</span>
                <span>${member.id}</span>
            </div>
            <div class="particulars">
                <span class="lead">Email</span>
                <span>${member.email}</span>
            </div>
            <div class="particulars">
                <span class="lead">Office Number</span>
                <span>${member.officeNumber}</span>
            </div>
        </div>
    `
}

function makeEngineer(member) {
    // return code in template literal
    return `
        <div class="employee">
            <div class="title">
                <span>${member.name} <span>- Engineer</span></span>
            </div>
            <hr />
            <div class="particulars">
                <span class="lead">Employee ID</span>
                <span>${member.id}</span>
            </div>
            <div class="particulars">
                <span class="lead">Email</span>
                <span>${member.email}</span>
            </div>
            <div class="particulars">
                <span class="lead">Github Username</span>
                <span>${member.Github}</span>
            </div>
        </div>
    `
}

function makeIntern(member) {
    // return code in template literal
    return `
        <div class="employee">
            <div class="title">
                <span>${member.name} <span>- Intern</span></span>
            </div>
            <hr />
            <div class="particulars">
                <span class="lead">Employee ID</span>
                <span>${member.id}</span>
            </div>
            <div class="particulars">
                <span class="lead">Email</span>
                <span>${member.email}</span>
            </div>
            <div class="particulars">
                <span class="lead">School</span>
                <span>${member.schoolName}</span>
            </div>
        </div>
    `
}

// Generate the main html code for the page
function homePagegenerator(teamCodeTemplate) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Awesome Team</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                My Awesome Team Members
            </header>
            <main>
                <div class="container">
                    ${teamCodeTemplate}
                </div>
            </main>
        </body>
        </html>
    `
}

// Function to prepare the team html codes and output to an external html file at /dist folder
function generateMainPage(teamArray) {
    let teamCodeTemplate = [];

    for (let i = 0; i < teamArray.length; i++) {
        let member = teamArray[i];
        let role = member.role;

        if (role === "Manager") {
            const managerCode = makeManager(member);
            teamCodeTemplate.push(managerCode);
        } else if (role === "Engineer") {
            const engineerCode = makeEngineer(member);
            teamCodeTemplate.push(engineerCode);
        } else {
            const internCode = makeIntern(member);
            teamCodeTemplate.push(internCode);
        }
    }

    // Transforms the completed teamCodeTemplate from an array into a single code blurb
    let combinedTeamCode = teamCodeTemplate.join("");

    // Stores the full code in a variable for insertion into a writeFile function
    let preparedTeamCode = homePagegenerator(combinedTeamCode);

    // Writes an index.html file containing the processed team inputs and stores it in the ../dist directory
    fs.writeFile('./dist/index.html', preparedTeamCode, (err) => 
        err ? console.log(err) : console.log("Your team page was generated sucessfully!\nCheck the dist folder for your awesome team page.\n==============\n\n")
    );
}

module.exports = {
    generateMainPage
}