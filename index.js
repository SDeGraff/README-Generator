// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?",
        default: "README.md File Generator",
    },
    {
        type: "input",
        name: "github",
        message: "what is your Github username?",
    },
    {
        type: "input",
        name: "repoName",
        message: "what is the name of the github repository?",
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of the project. ",
    },
    // {
    //     type: "checkbox",
    //     name: "sections",
    //     message: "Select which sections to add",
    //     choices: [
    //         new inquirer.Separator("= Choose a Sections ="),
    //         {name: "installation"},
    //         {name: "screenshots"},
    //         {name: "tool list"},
    //         {name: "license"}
    //     ]
    // },
    {
        type: "input",
        name: "installation",
        message: "What installation instructions do you have for the user? ",
        
    },
    {
        type: "input",
        name: "authorName",
        message: "What is the name of the Author? ",
    },
    {
        type: "input",
        name: "authorLinkedIn",
        message: "What is your LinkedIn Username? ",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Enter screenshot file name:",
        default: "./image/default.jpg"
    },
    {
        type: "input",
        name: "toolList",
        message: "Enters tools used. Separate them with a comma.",
        default: "",
    },
    { 
        type: "List",
        name: "license",
        message: "What license are you using?",
        choices:  ["MIT", "Apache 2.0", "Mozilla", "none"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, err => {
        err ? console.log(err) : console.log("Created readme successfully");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("sampleREADME.md", generateMarkdown(answers));
    });
}

// Function call to initialize app
init();