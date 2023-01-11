//Contains prompt to ask user
const questions = {
    managerPrompt: [
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
    ],
    menuPrompt: [
        {
            type: 'list',
            name: 'menuAction',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer','Intern',"Finish building my team"]
        }
    ],
    engineerPrompt: [
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
    ],
    internPrompt: [
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
    ]
}

module.exports = questions