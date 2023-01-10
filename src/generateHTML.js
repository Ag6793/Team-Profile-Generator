const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");



//Function will render an icon image depending on which employee the user wants to add 
function renderIcon(teamMember){
    console.log("Generating icon")
    console.log(teamMember)
    if (teamMember.getRole() === 'Engineer') {
        return `<span class="material-symbols-outlined">engineering</span>` //icon for engineer
    } else if (teamMember.getRole() === 'Intern') {
        return `<span class="material-symbols-outlined">school</span>` //icon for intern
    } 
    return '<span class="material-symbols-outlined">local_cafe</span>' //icon for manager
}

//Function will add the school/github/officenumber to the added employee depending on their role
function addInfo(teamMember) {
    console.log("Generating add info")
    // console.log(teamMember)
    if (teamMember.getRole() === 'Engineer') {
        return `<p><a href='${teamMember.github}'>${teamMember.github}</a></p>`
    }else if(teamMember.getRole() === 'Intern') {
        return teamMember.school
    }
    return `${teamMember.officeNumber}`;
}


//Function will create an html div depending on the user input
function renderTeamMemberSection(teamMember){
    console.log("Generating div section") 
    // console.log(teamMember)
return`<div class="team_member">
    <p class="blue-header" id="name">${teamMember.name}</p>
    <p class="blue-header">${renderIcon(teamMember)}${teamMember.getRole()}</p>
    <p>ID: ${teamMember.id}</p>
    <p>Email: <a href="${teamMember.email}">${teamMember.email}</a></p>
    <p>${addInfo(teamMember)}</p>
</div>` }


//A function to generate an html document from user input
function generateHTML(data) {
    console.log("Generating HTML")
    console.log(data);
    var cards = ' ';
    for(let i=0; i< data.length; i++){
        cards += renderTeamMemberSection(data[i])
    }
    return `<!DOCTYPE html>
    <html lang = "en-us">
    
    <head>
        <meta charset = "UTF-8" />
        <link rel = "stylesheet" href="style.css">
        <title>My Team</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> <!--icons-->
        
    </head>
    
    <body>
        <header><h1>My Team</h1></header>

        <section class = "main">
           ${cards}
        </section>

    <script src="index.js"></script>
    </body>
    
    </html>`
}

module.exports = generateHTML;
