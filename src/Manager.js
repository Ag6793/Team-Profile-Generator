const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';//overridden to return'Manager'
    }
}

module.exports = Manager;

//Prompt will ask for Manager's info