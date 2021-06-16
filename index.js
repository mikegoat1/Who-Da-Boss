
const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// const generateHTML = require("./src/markDown")
const teams = []



inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Whats the Manager's name?"
        },
        {
            type: "input",
            name: "email",
            message: "Whats your email?"
        },
        {
            type: "input",
            name: "special",
            message: "What is the office number?"
        },
        {
            type: "input",
            name: "id",
            message: "Whats the worker id?"
        }
    ])

    .then((answer) => {
        let manager = new Manager(answer.name, answer.id, answer.email, answer.special);
        teams.push(manager);
        anotherOne();
        // If No More is chosen load page. 
        


    })

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}

function anotherOne() {
    inquirer.prompt([

        {
            type: "checkbox",
            name: "repeat",
            message: "Would you like to add another worker?",
            choices: ["Engineer", "Intern", "No more"]
        }
    ])
        .then((answer) => {
            if (answer.repeat.toString() == "No more") {
                let storedCards=""; 
                teams.forEach(element => {
                   storedCards += generateCards(element)
                    
                });
                writeToFile("index.html", generateHTML(storedCards));

                //if no 
                //run for loop to generate cards
                // if yes compare answer to run proper question
                // push answer to object
                // callback anotherOne
            } else if (answer.repeat.toString() == "Engineer") {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Whats the Engineer's name?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "Whats your email?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "Whats the worker id?"
                    },
                    {
                        type: "input",
                        name: "special",
                        message: "What is your GitHub username?"
                    },
                ])
                    .then((answer) => {
                        let engineer = new Engineer(answer.name, answer.id, answer.email, answer.special)
                        teams.push(engineer);
                        anotherOne();
                    })
            } else {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Whats the Intern name?"
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "Whats your email?"
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "Whats the worker id?"
                    },
                    {
                        type: "input",
                        name: "special",
                        message: "What school did you go to?"
                    },
                ])
                    .then((answer) => {
                        let intern = new Intern(answer.name, answer.id, answer.email, answer.special)
                        teams.push(intern);
                        anotherOne();
                    })
            }
        })
}


function generateHTML(storedCards) {
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

               
                ${storedCards}
    
    
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
            <li class="list-group-item">${data.special}</li>
        </ul>
    </div>`

    return newCard

}