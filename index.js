// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
const generateMarkdown = require(./utils/generateMarkdown)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project"

    }
    { 
        type: "List"
        name: "License"
        message: ["MIT", "Apache 2.0", "Mozilla", "none"]

    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile("README.md" data,err => {
        
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();