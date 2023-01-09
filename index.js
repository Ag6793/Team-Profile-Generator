const inquirer = require('inquirer');
const fs = require('fs');
// const { clear } = require('console'); //not sure what this is
const questions = require('./src/questions');
// const { menuPrompt } = require('./src/questions');
// const generateHTML = require('./src/generateHTML');
// const createEngineer = require('./src/Engineer' );
// const createIntern = require('./src/Intern');
// const Manager = require('./src/Manager');
const teamMembers = []

const menu = () =>
    console.log("menu is working");
    inquirer //bug: when you first move arrow keys the prompt replicates
        .prompt(questions.menuPrompt)
        .then(function({menuAction}) {
            switch (menuAction) {
                case 'Manager':
                    console.log("manager is working");
                    createManager()
                    break;
                case 'Engineer':
                    console.log("engineer is working");
                    createEngineer()
                    break;
                case 'Intern':
                    console.log("intern")
                    createIntern()
                    break;
                default:
                    fs.writeFile('./dist/index.html', generateHTML(teamMembers), err=> console.log(err))
                break;

            }
        })
        
        //function({menuAction})
const createEngineer = () => {
    console.log("engineer is working");
     inquirer
        .prompt(questions.engineerPrompt)
        .then(data => {
            console.log(data)
        
             menu();
         })
 }

const createIntern = () =>
    inquirer
        .prompt(questions.internPrompt)
        .then(data => {
            console.log(data)

            menu();
        })

const createManager = ( ) => {
    inquirer
        .prompt(questions.managerPrompt)
        .then(data => {
            console.log(data);

            menu();
        })
}







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


menu()