const inquirer = require('inquirer');
const fs = require('fs');
const { clear } = require('console');
const questions = require('./src/questions')
const generateHTML = require('./src/generateHTML');
const createEngineer = require('./src/Engineer' );
const createIntern = require('./src/Intern');
const Manager = require('./src/Manager');
const teamMembers = []

const menu = () =>
    inquirer
        .prompt(questions.menuPrompt)
        .then(function ({ menuAction }) {
            switch (menuAction) {
                case 'Engineer':
                    createEngineer()
                    break;
                case 'Intern':
                    console.log("intern")
                    break;
                default:
                    fs.writeFile('./dist/index.html', generateHTML(teamMembers), err=> console.log(err))
                break;
            }
        })

function createEngineer() {
    inquirer
        .prompt(questions.engineerPrompt)
        .then(data => {
            console.log(data)

            menu()
        })
}



const createIntern = () =>
    inquirer
        .prompt(questions.internPrompt)
        .then(function (data) {
            console.log(data)
        })

// async function callInquirers() {
//     const inq1 = await inquirer.prompt([...]);
//     const inq2 = await inquirer.prompt([...]);

//     // do stuff with results inq1 and inq2
// }


// // input data to create an HTML
// function writeToFile (name, data) {
//     return fs.writeFileSync (name, data)
// }

// function app() {

// inquirer 
//     .prompt(generateHTML) //calls different prompts?
//     .then((data) => writeToFile('index-test.html', generateHTML(data))) //how to add other prompt arrays?
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

menu()