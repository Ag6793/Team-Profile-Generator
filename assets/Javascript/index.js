/*const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const generateHTML = [
    {
        type: 'input',
        name: 'title',
        message: 'What is their job title?'
    }

]

function writeToFile (name, data) {
    return fs.writeFileSync (name, data)
}

function app() {

inquirer 
    .prompt(generateHTML)
    .then((data) => writeToFile('index.html', generateMarkdown(data))) 
    .then (() => console.log('Successfully created index.html!'))
    .catch((err) => console.log(err));
    
}
app();*/