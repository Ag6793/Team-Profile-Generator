//A function to generate an html document from user input
function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang = "en-us">
    
    <head>
        <meta charset = "UTF-8" />
        <link rel = "stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    
    <body>
        <div>
        </div>

    <script src="index.js"></script>
    </body>
    
    </html>`
}

module.exports = generateHTML;

//for new fields use innerHTML?