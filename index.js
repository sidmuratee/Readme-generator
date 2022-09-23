const fs = require('fs');
const inquirer = require('inquirer');

// let repoName = "Repo Name"
// let tableOfContents = "Table Of Contents"
// let description = "Description"
// let installation = "Installation"
// let usage = "Usage"
// let test = "Test"
// let contributors = "Contributors"
// let license = "MIT"
// let contact = "Contact"



function generateLicenseBadge(license) {
    if (license === "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    else if (license === "Apache")
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    else if (license === "Mozilla")
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    // if (license === "GNUGPL")
    // return ""

}}



inquirer
.prompt([
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
        message: 'Would you like a description?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Would you like to add installation instructions?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What are the uses of this application?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Would you like to add test instructions?',
        name: 'Test',
    },
    {
        type: 'input',
        message: 'Do you want to add any contributors?',
        name: 'Contributors',
    },
    {
        type: 'list',
        message: 'Which license did you use?',
        name: 'license',
        choices: ['MIT', 'Apache', 'Mozilla', 'GNUGPL'],
    },
    {
        type: 'input',
        message: 'would you like to add any contact info?',
        name: 'ContactInfo',
    },
    
    
]).then((responses)=> {
    let readMeText = `
    # ${responses.RepoName}
    
    ## Table of Contents
    ${responses.TableOfContents}
* [description](description)
* [installation](#installation)
* [usage](#usage)
* [test](#test)
* [contributors](#contributors)
* [license](#license)
* [contact](#contact)
    
    ## Description
    ${responses.Description}
    
    ## Installation
    ${responses.Installation}
    
    ## Usage
    ${responses.Usage}
    
    ## Test
    ${responses.Test}
    
    ## Contributors
    ${responses.Contributors}
    
    ## license
    ${generateLicenseBadge(responses['license'])}
    
    
    ## Contact
    ${responses.ContactInfo}`

    fs.writeFile("read.md", readMeText, function (err) {

        if (err)
            console.log(err);

    })
});

// function init() {
//     inquirer.prompt(questions).then((answers) => {
//         fs.writeFile("readme.md", readMeText(answers), function (err) {
//             if (err) console.log(err);
//         });
//     });
// }

// init();



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
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