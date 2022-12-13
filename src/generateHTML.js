//Function if they select more or none team members
function renderteamMember(teamMember){
    if (teamMember === "I don't want to add any more team members") {
        return ' '
    }
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
                <p>Email: ${data.email}</p>
                <p>${data.officeNumber}</p>
            </div>

            ${renderteamMember}
        </section>

    <script src="index.js"></script>
    </body>
    
    </html>`
}

module.exports = generateHTML;

//for new fields use innerHTML?
//Each entry create a div
//Depending on the add team member determines the icon