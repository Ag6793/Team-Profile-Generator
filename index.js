const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./src/questions');
const generateHTML = require('./src/generateHTML');
const Engineer = require('./src/Engineer' );
// const createIntern = require('./src/Intern');
// const Manager = require('./src/Manager');

const teamMembers = []

const menu = () => {
    inquirer
        .prompt(questions.menuPrompt)
        .then(function ({ menuAction }) {
            switch (menuAction) {
                case 'Engineer':
                    createEngineer()
                    break;
                case 'Intern':
                    createIntern()
                    break;
                default:
                    fs.writeFile('./dist/index.html', generateHTML(teamMembers), err => console.log(err))
                    break;

            }
        })
}

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

const createIntern = () => {
    inquirer
        .prompt(questions.internPrompt)
        .then(data => {
            console.log(data)

            // menu();
        })
}

//Need to have manager prompt appear before menu prompt
const createManager = () => {
    inquirer
        .prompt(questions.managerPrompt)
        .then(data => {
            console.log(data);

            // menu();
        })
}

menu()

