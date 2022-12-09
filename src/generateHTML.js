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
    <script src="index.js"></script>
    </body>
    
    </html>`
}

module.exports = generateHTML;