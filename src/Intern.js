const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super();//name,id,email
        this.school = school;
    }

    getRole() {
        return 'Intern' //overridden to return'Intern'
    }
}

module.exports = Intern;

//Prompt will ask intern: name. ID. Email, School