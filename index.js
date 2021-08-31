// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Questions array for user input

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectInfo.title',
            message: 'What is the title of your project? (required)',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log('Your project deserves a name, come on.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectInfo.description',
            message: 'Provide a description of the project (required):',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Describe your project.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'builtWithInfo.languages',
            message: 'With what did you build this project? Check all that apply:',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'installInfo.instructions',
            message: 'List instructions for installing this project. (required):',
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to include a "How To Use" section in your README.md file?',
        },
        {
            type: 'input',
            name: 'usageInfo.uses',
            message: 'Provide instructions and examples for use. You may choose to add an image later.',
            when: ({ confirmUsage }) => {
                if (confirmUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmPreview',
            message: 'Would you like to add a screenshot or video walkthrough of your project?',
        },
        {
            type: 'input',
            name: 'previewImage.url',
            message: 'Enter the URL or relative file path to your preview.',
            when: ({ confirmPreview }) => {
                if (confirmPreview) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'deploymentLink.url',
            message: 'Enter the link to your project (required):',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Enter the link to your project (required).');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCredit',
            message: 'Would you like to list any third-party assets that require attribution?',
        },
        {
            type: 'input',
            name: 'creditsInfo.credits',
            message: 'Please enter third-party assets\' attributions:',
            when: ({ confirmCredit }) => {
                if (confirmCredit) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCollaborators',
            message: 'Would you like to list any collaborators?',
        },
        {
            type: 'input',
            name: 'collaboratorsInfo.collaborators',
            message: 'Please enter your collaborators:',
            when: ({ confirmCollaborators }) => {
                if (confirmCollaborators) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to allow other developers to contribute to your project? ',
        },
        {
            type: 'input',
            name: 'contributingInfo.contributing',
            message: 'Please include guidelines for how developers may contribute.',
            when: ({ confirmContributing }) => {
                if (confirmContributing) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to include tests you\'ve written for your project? ',
            default: true
        },
        {
            type: 'input',
            name: 'testsInfo.tests',
            message: 'Please include tests and examples on how to run them.',
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmail',
            message: 'Would you like to list your email address?',
        },
        {
            type: 'input',
            name: 'contactInfo.email',
            message: 'Please enter your email address.',
            when: ({ confirmEmail }) => {
                if (confirmEmail) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
                type: 'confirm',
                name: 'confirmGitHub',
                message: 'Would you like to add your GitHub user profile?',
            },
        {
            type: 'input',
            name: 'contactInfo.github',
            message: 'Please enter the link to your GitHub profile.',
            when: ({ confirmGitHub }) => {
                if (confirmGitHub) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmWebsite',
            message: 'Would you like to link to your personal website?',
        },
        {
            type: 'input',
            name: 'contactInfo.website',
            message: 'Please enter your personal website address.',
            when: ({ confirmWebsite }) => {
                if (confirmWebsite) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmPhone',
            message: 'Would you like to add a phone number?',
        },
        {
            type: 'input',
            name: 'contactInfo.phone',
            message: 'Please enter a phone number.',
            when: ({ confirmPhone }) => {
                if (confirmPhone) {
                    return true;
                } else {
                    return false;
                }
            }
        },    
        {
            type: 'confirm',
            name: 'confirmLicenseInfo',
            message: 'Would you like to add a license badge to your README?',
        },
        {
            type: 'list',
            name: 'licenseInfo.message',
            message: 'Please choose a license from the following list (required):',
            choices: [{'name':'APM', 'value': 'apm'}, ({'name':'AUR license', 'value': 'aur'}), ({'name':'Bower', 'value':'bower'}), ({'name':'Cocoapods', 'value':'cocoapods'}), ({'name':'Conda license', 'value':'condaLicense'}), ({'name':'CPAN', 'value':'cpan'}), ({'name': 'CRAN/METACRAN', 'value': 'cranMetacran'}), ({'name':'Crates.io', 'value':'crates'}), ({'name': 'CTAN', 'value': 'ctan'}), ({'name':'DUB', 'value':'dub'}), ({'name':'Eclipse Marketplace', 'value':'eclipseMarketplace'}), ({'name':'GitHub', 'value':'gitHub'}), ({'name':'Hex.pm', 'value': 'hex'}), ({'name':'NPM','value':'npm'}), ({'name':'Ore license','value':'oreLicense'}), ({'name':'Pakagist license', 'value':'packagistLicense'}), ({'name':'Packagist license custom server', 'value': 'packagistLicenseCs'}), ({'name':'PyPI license', 'value':'pypiLicense'}), ({'name':'REUSE Compliance', 'value': 'reuseCompliance'}), ({'name':'Weblate component license', 'value':'weblateComponentLicense'})],
            when: ({ confirmLicenseInfo }) => {
                        if (confirmLicenseInfo) {
                            return true;
                        } else {
                            return false;
                        }
                    }
        }, 
        {
            type: 'list',
            name: 'licenseInfo.color',
            message: 'Please choose a color from the following list (required):',
            choices: ['brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 'blue', 'lightgrey', 'blueviolet', 'ff69b4', '9cf'],
            when: ({ confirmLicenseInfo }) => {
                if (confirmLicenseInfo) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'madeBy.madeBy',
            message: 'This app was made with ❤️ by: ',
        },
        {
            type: 'input',
            name: 'madeBy.copyright',
            message: 'Copyright year: ',
        },
    ])
}



// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) throw err;
        console.log('Your ReadMe file has been generated! Look for README.md in the generated-file folder to see the result.')
    });
}

// Function to initialize app
function init() {
    console.log("Let's create a new README.md file for your project!")

    promptUser()
        .then(myPromiseFulfilledData => {
            console.log(myPromiseFulfilledData)
            writeToFile("./generated-file/readme.md", myPromiseFulfilledData)
        })
}

// Function call to initialize app
init();