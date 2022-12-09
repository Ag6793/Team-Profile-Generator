const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name, id, email);//name,id,email
        this.github = github;
    }

    getRole() {
        return 'Engineer'; //overridden to return'Engineer'
    }

    getGithub() {
        this.github;
    }
}

module.exports = Engineer;