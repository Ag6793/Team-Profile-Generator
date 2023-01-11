const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./src/questions');
const generateHTML = require('./src/generateHTML');
const Engineer = require('./src/Engineer' );
const Intern = require('./src/Intern');
const Manager = require('./src/Manager');

const teamMembers = []

//Function to run after the user has inputed manager information. 
const menu = () => {
    inquirer
        .prompt(questions.menuPrompt)
        .then(function ({ menuAction }) {
            switch (menuAction) {
                //If the user selects to create a new Engineer, the engineer prompt questions will run
                case 'Engineer':
                    createEngineer()
                    break;
                //If the user selects to create a new Intern, the intern prompt questions will run
                case 'Intern':
                    createIntern()
                    break;
                //If the user selects "Finished building my team", this will generate the html from the user input
                default:
                    fs.writeFile('./dist/index.html', generateHTML(teamMembers), err => console.log(err))
                    break;

            }
        })
}

//Function to run engineer prompt questions when selected from the menu
const createEngineer = () => {
    inquirer
        .prompt(questions.engineerPrompt)
        .then(data => {
            const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.github
            );
            teamMembers.push(engineer)
            menu()
        })
}

//Function to run intern prompt questions when selected from the menu
const createIntern = () => {
    inquirer
        .prompt(questions.internPrompt)
        .then(data => {
            const intern = new Intern(
                data.name,
                data.id,
                data.email,
                data.school
            );
            teamMembers.push(intern)
            menu()
        })
}

//Function to initiate manager prompt questions to the user before the other prompts
const createManager = () => {
    inquirer
        .prompt(questions.managerPrompt)
        .then(data => {
            const manager = new Manager(
                data.name,
                data.id,
                data.email,
                data.officeNumber
            );
            teamMembers.push(manager)
            menu()
        })
}

//Starts manager prompt
createManager();

