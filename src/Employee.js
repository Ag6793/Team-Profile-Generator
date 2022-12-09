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