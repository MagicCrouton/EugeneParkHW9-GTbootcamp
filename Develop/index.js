// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// this is the inquier prompt list needed.
const questions = [
      {
        type: 'input',
        name: 'ReadmeTitle',
        message: 'what will you call this readme?',
      },   
      {
        type: 'input',
        name: 'repoLink',
        message: 'what is your github repo link?',
      },
//   break here to generate template of readme (these "break" points are just here to guide me to ensure i 
// understand and hit all the acceptancec criteria
// it does not mean i am stopping the app here to build as i go or i may)
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
// break here to fill sections
      {
        type: 'list',
        message: 'Which License do you want to add?',
        name: 'license',
        choices: ['MIT', 'ETC', 'ETC'],
      },
// break here to input license file and add badge to readme
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
function writeToFile(fileName, data) {
console.log(fileName);
console.log(data);
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((response) => {
writeToFile(response.ReadmeTitle, response)
})
}

// Function call to initialize app
init();
