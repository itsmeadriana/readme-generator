// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) throw err;
        console.log('Your ReadMe file has been generated! Look for readme.md to see the result.')
    });
}

// TODO: Create a function to initialize app
function init() {
    let data = {
        "title": "Best Title"
    }

    writeToFile('README.md', data)
    console.log('the app started');
}

// Function call to initialize app
init();
