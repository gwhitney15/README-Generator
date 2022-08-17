// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs');
// TODO: Create an array of questions for user input


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'enter the project title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: 'enter a description of this project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your description!');
                return false;
            }
        }


    }, {
        type: 'input',
        name: 'why',
        message: 'why did you build this project?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter why you build this project!');
                return false;
            }
        }


    }, {
        type: 'input',
        name: 'what',
        message: 'what problem does this solve?',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter the problem this project solves!');
                return false;
            }
        }


    },
    {
        type: 'input',
        name: 'challenges',
        message: 'what challenges did you face creating this?',
        validate: challengesInput => {
            if (challengesInput) {

                return true;

            } else {
                console.log('Please enter something challenging about this project!');
                return false;
            }
        }


    }, {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['mozilla', 'apache', 'mit', 'no license']
    }, {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
        validate: gitNameInput => {
            if (gitNameInput) {

                return true;

            } else {
                console.log('Please enter your github name!');
                return false;
            }
        }


    }, {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
        validate: emailInput => {
            if (emailInput) {

                return true;

            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }


    },];
// TODO: Create a function to write README file
const createFile = content => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generated-readme.md', content, err => {
            if (err) {
                reject(err);
                return;
            } else { console.log("the file was created"); resolve }
        })
    })
}



// TODO: Create a function to initialize app
const init = () => {

    return inquirer.prompt(questions)
        .then(newData => {

            return newData;

        })
        .then(newData => {
            return generateMarkdown(newData)

        })
        .then(data => {
            return createFile(data)
        })

        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();

