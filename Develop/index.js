// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// this is the inquier prompt list needed.
const questions = [
      {
        type: 'input',
        name: 'repoLink',
        message: 'what is your github repo link?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'what is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'describe your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'how do you install your application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'how is your app used?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'list your contributors',
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'what are the testing instructions?',
      },
      {
        type: 'list',
        message: 'Which License do you want to add?',
        name: 'license',
        choices: ['MIT', 'ETC', 'ETC'],
      },
      {
        type: 'input',
        name: 'gitUserName',
        message: 'What is your github User name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
