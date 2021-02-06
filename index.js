// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: gitInput => {
            if (gitInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your project's name? (Required)",
        validate: titleInput => {
            if (titleInput ) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please describe your project!');
                return false;
            }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['APACHE 2.0','BSD 3', 'GPL 3.0', 'MIT', 'None']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information (Required)',
        validate: inputUsage => {
            if (inputUsage) {
                return true;
            } else {
                console.log('Please enter information for usage');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please provide some guidelines for contributions'
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README complete!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("./README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();

