//Function if they select more or none team members
function renderRole(teamMember) {
    if (teamMember === 'Engineer') {
        return engineerRole
    } else if (teamMember === 'Intern') {
        return internRole
    } else {
        return ''
    } 
}

function renderIcon(teamMember){
    if (teamMember === 'Engineer') {
        return `<span class="material-symbols-outlined">engineering</span>`
    } else if (teamMember === 'Intern') {
        return `<span class="material-symbols-outlined">school</span>`
    } 
    return '' 
}

function addInfo(teamMember) {
    if (teamMember === 'Engineer') {
        return `\n* ${this.github} \n`
    }else if(data.role === 'Intern') {
        return this.school
    }
    return '';
}



function renderTeamMemberSection(teamMember){
    if (teamMember !== "Finish building my team"){
`<div class="team_member">
    <p class="blue-header" id="name">${data.name}</p>
    <p class="blue-header">${renderIcon(data.teamMember)}${data.teamMember}</p>
    <p>ID: ${data.id}</p>
    <p>Email: <a href="${data.email}">${data.email}</a></p>
    <p>${addInfo(data.teamMember)}</p>
</div>` }
    return ''
}

//A function to generate an html document from user input
function generateHTML(data) {
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
            <div class="team_member">
                <p class="blue-header" id="name">${data.name}</p>
                <p class="blue-header"><span class="material-symbols-outlined">local_cafe</span> Manager</p>
                <p>ID: ${data.id}</p>
                <p>Email: <a href="${data.email}">${data.email}</a></p>
                <p>${data.officeNumber}</p>
            </div>

            ${renderTeamMemberSection(data.teamMember)}
        </section>

    <script src="index.js"></script>
    </body>
    
    </html>`
}

module.exports = generateHTML;

//for new fields use innerHTML?
//Each entry create a div
//Depending on the add team member determines the icon