const jest = require("jest");
const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./src/markDown")
const teams = []


inquirer
    .prompt([
        {
            type: "input",
            name: "manager",
            message: "Whats the Manager's name?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Whats your email?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the office number?"
        },
        {
            type: "input",
            name: "id",
            message: "Whats the worker id?"
        }
    ])

    .then((answer) => {

        console.log(answer.repeat)
        //If No More is chosen load page. 
        if (answer.repeat.toString() == "No more") {
            let manager = new Manager(answer.manager, answer.id, answer.managerEmail, answer.office);
            console.log(manager); 
            //push to an array
            // use array for generate cards

            //function prompt for each question
            // last question for callback

            writeToFile("index.html", generateHTML(manager));

        } else if(answer.repeat.toString() == "Engineer"){
            // If Engineer is chosen add Card 
            let manager = new Manager(answer.manager, answer.id, answer.managerEmail, answer.office);
            console.log(manager); 
        }


    })

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}

function anotherOne (){
    inquirer.prompt([
        
        {
            type: "checkbox",
            name: "repeat",
            message: "Would you like to add another worker?",
            choices: ["Engineer", "Intern", "No more"]
        }
    ])
    .then((answer)=>{

        //if no 
            //run for loop to generate cards
        // if yes compare answer to run proper question
            // push answer to object
            // callback anotherOne
    })
}

function nextPrompt() {
    if (answer.repeat.toString() === "Engineer") {
        inquirer.prompt([
            {
                type: "input",
                name: "Engineer",
                message: "Whats the Engineer's name?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Whats your email?"
            },
            {
                type: "input",
                name: "id",
                message: "Whats the worker id?"
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is your GitHub username?"
            },
            {
                type: "checkbox",
                name: "repeat",
                message: "Would you like to add another?",
                choices: ["Engineer", "Intern", "ALL DONE!"]
            },
        ])
            .then((answer) => {
                generateCards(answer)

            })

    } else if (answer.repeat === "Intern") {
        inquirer.prompt([
            {
                type: "input",
                name: "intern",
                message: "Whats the Intern name?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "Whats your email?"
            },
            {
                type: "input",
                name: "id",
                message: "Whats the worker id?"
            },
            {
                type: "input",
                name: "school",
                message: "What school did you go to?"
            },
            {
                type: "checkbox",
                name: "repeat",
                message: "Would you like to add another?",
                choices: ["Engineer", "Intern", "ALL DONE!"]
            },
        ])
    }
}