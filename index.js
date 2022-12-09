const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('generateHTML');

const generateHTML = [
    console.log('Welcome to the team generator!'),
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's id?"//input a number
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?"//input a number
    },
    {
        type: 'input',
        name: 'teamMember',
        message: "Which type of team member would you like to add?",
        choices: ['Engineer','Intern',"I don't want to add any more team members"]
    },


]

//input data to create an HTML
function writeToFile (name, data) {
    return fs.writeFileSync (name, data)
}

function app() {

inquirer 
    .prompt(generateHTML)
    .then((data) => writeToFile('index.html', generateHTML(data))) 
    .then (() => console.log('Successfully created index.html!'))
    .catch((err) => console.log(err));
    
}
app();
//Welcome to the team generator!
//use'npm run reset' to reset the dist/folder
//Please build your team:
//What is the team manager's name?
//What is the team manager's id?
//what is the team manager's email?
//what is the team manager's office number?
//Which type of team member would you like to add? (prompt to create engineer/intern/ or I don't want to add any more team members)
//At the end the dist folder will be generated with 2 files. Style.css & team.html