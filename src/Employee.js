//Employee Parent Class
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

   getName() {
    this.name;
   }

   getId() {
    this.id;
   }

   getEmail() {
    this.email;
   }
   getRole() {
    return 'Employee'; //returns 'Employee'
}}


module.exports = Employee;

