
function generateHTML(data1){
    let markDown = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    
    
    </head>


    <body>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center bg-warning ">
                    <h1>My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div id="appendHere" class="row mx-auto my-auto">
                <!-- The cards will append here -->

               
                ${generateCards(data1)}
    
    
            </div>
        </div>

        <!-- Bootstrap Script -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`
    return markDown;
}

function generateCards(data) {
    let newCard = ` 
        <div class="card w-25 mt-5 me-5">
        <div class="card-body bg-secondary text-center">
            <h4 class="card-title">${data.name}</h4>
            <p class="card-text">${data.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush text-center">
            <li class="list-group-item">${data.id}</li>
            <li class="list-group-item">${data.email}</li>
            <li class="list-group-item">${data.officeNumber}</li>
        </ul>
    </div>`

    return newCard

}

module.exports = generateHTML, generateCards; 