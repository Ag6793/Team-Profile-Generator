//Array of questions to create prompts
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
            message: "What is the team manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        },
    ],
    //The menu prompt to determine which employee to create
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
            message: "What is the Engineer's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's Github?"
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
            message: "What is the Intern's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the Intern attend?"
        }
    ]
}

module.exports = questions