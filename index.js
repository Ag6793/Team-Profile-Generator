const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const engineer = require('./src/Engineer' );
const employee = require('./src/Employee');
const intern = require('./src/Intern');
const manager = require('./src/Manager');

// const generateHTML = () =>
inquirer
    .prompt ([
    console.log('Welcome to the team generator!'),
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?"//input a number
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?"//input a number
    },
    {
        type: 'input',
        name: 'teamMember',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer','Intern',"Finish building my team"]
    }
])
.then(function(data) {
 
    
})

// const engineerRole = () =>
inquirer
    .prompt ([
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's id?"//input a number
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's Github?"//input a number
    }
])
.then(function(data) {

})

// const internRole = () =>
inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's id?"//input a number
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does the Intern attend?"//input a number
    }
])
.then(function(data) {

})

/*async function callInquirers() {
    const inq1 = await inquirer.prompt([...]);
    const inq2 = await inquirer.prompt([...]);

    // do stuff with results inq1 and inq2
}*/


//input data to create an HTML
// function writeToFile (name, data) {
//     return fs.writeFileSync (name, data)
// }

// function app() {

// inquirer 
//     .prompt(generateHTML, internRole, engineerRole) //calls different prompts?
//     .then((data) => writeToFile('./dist/index.html', generateHTML(data))) //how to add other prompt arrays?
//     .then (() => console.log('Successfully created index.html!'))
//     .catch((err) => console.log(err));
    
// }

// app();


//prompt to enter manager info
//when entered info presented with a 
//menu with 3 options: to add an engineer/ an intern/ or finish building my team
//when i select engineer option, im prompted to enter their info and taken back to the menu
//when i select intern, im prompted to enter their info, i'm then taken back to the menu
//when i decide to finish building my team i exit the application and the html is generated

//Welcome to the team generator!
//use'npm run reset' to reset the dist/folder
//Please build your team:
//What is the team manager's name?
//What is the team manager's id?
//what is the team manager's email?
//what is the team manager's office number?
//Which type of team member would you like to add? (prompt to create engineer/intern/ or I don't want to add any more team members)
//At the end the dist folder will be generated with 2 files. Style.css & team.html