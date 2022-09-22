const fs = require('fs');
const inquirer = require('inquirer');

let repoName = "Repo name"
// let repoQ = "What is the name of your repo?"

let tableOfContents = "Table Of Contents"
// let tableOfContentsQ = "Would you like a table of contents?"

let description = "Description"
// let descriptionQ = "Would you like a description?"

let usage = "Usage"
// let usageQ = "What are the uses for this project?"

let contributors = "Contributors"
// let contributorsQ = "Do you want to add any contributors?"

let license = "MIT"
// let licenseQ = "Which license(s) did you use?"

let contact = "Contact"
// let contactQ = "Would you like to add any contact info?"


function generateLicenseBadge() {
    if (license === "MIT")
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]"

}

function readMeText(answers) {
    let readMeString = "";
    readMeString +=
        `

## ${repoName}
    
## Table of Contents
${tableOfContents}

## Description
${description}

## Usage
${usage}

## Contributors
${contributors}

## License
${generateLicenseBadge()}


## Contact
${contact}
    `

    return readMeString

}



const questions = [
    {
        type: 'input',
        message: 'What is your Repo name?',
        name: 'RepoName',

    },
    {
        type: 'validate',
        message: 'Would you like a Table of Contents?',
        name: 'TableOfContents',
    },
    {
        type: 'input',
        message: 'Would you like a description',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What are the uses of this application?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Do you want to add any contributors?',
        name: 'Contributors',
    },
    {
        type: 'list',
        message: 'Which license(s) did you use?',
        name: 'Licenses',
        choices: ['MIT', 'Apache', 'Mozilla', 'GNUGPL'],
    },
    {
        type: 'input',
        message: 'would you like to add any contact info?',
        name: 'ContactInfo',
    },

];

function init() {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile("readme.md", readMeText(answers), function (err) {
            if (err) console.log(err);
        });
    });
}

init();




// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

