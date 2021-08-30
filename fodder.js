    // {
    //     type: 'checkbox',
    //     name: 'languages',
    //     message: 'With what did you build this project? Check all that apply:',
    //     choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    // },
    // {
    //     type: 'input',
    //     name: 'installInfo',
    //     message: 'List instructions for installing this project. (required):',
    //     default: false
    // },
    // {
    //     type: 'confirm',
    //     name: 'confirmUsage',
    //     message: 'Would you like to include a "How To Use" section in your README.md file?',
    //     default: true
    // },
    // {
    //     type: 'input',
    //     name: 'usageInfo',
    //     message: 'Provide instructions and examples for use. You may choose to add an image later.',
    //     when: ({ confirmUsage }) => {
    //         if (confirmUsage) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'confirm',
    //     name: 'confirmPreview',
    //     message: 'Would you like to add a screenshot of your project?',
    //     default: true
    // },
    // {
    //     type: 'input',
    //     name: 'previewImage',
    //     message: 'Enter the URL to your image.',
    //     when: ({ confirmPreview }) => {
    //         if (confirmPreview) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'input',
    //     name: 'deploymentLink',
    //     message: 'Enter the link to your project (required):',
    //     validate: linkInput => {
    //         if (linkInput) {
    //             return true;
    //         } else {
    //             console.log('Enter the link to your project (required).');
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'confirm',
    //     name: 'confirmCredit',
    //     message: 'Would you like to list any third-party assets that require attribution?',
    //     default: true
    // },
    // {
    //     type: 'input',
    //     name: 'creditsInfo',
    //     message: 'Please enter third-party assets\' attributions:',
    //     when: ({ confirmCredit }) => {
    //         if (confirmCredit) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'confirm',
    //     name: 'confirmCollaborators',
    //     message: 'Would you like to list any collaborators?',
    //     default: true
    // },
    // {
    //     type: 'input',
    //     name: 'collaboratorsInfo',
    //     message: 'Please enter your collaborators:',
    //     when: ({ confirmCollaborators }) => {
    //         if (confirmCollaborators) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // },
    // {
    //     type: 'confirm',
    //     name: 'confirmContributing',
    //     message: 'Would you like to allow other developers to contribute to your project? ',
    //     default: true
    //   },    
    //   {
    //     type: 'input',
    //     name: 'contributingInfo',
    //     message: 'Please include guidelines for how developers may contribute.',
    //     when: ({ confirmContributing }) => {
    //       if (confirmContributing) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     }
    //   },
    //   {
    //     type: 'confirm',
    //     name: 'confirmTests',
    //     message: 'Would you like to include tests you\'ve written for your project? ',
    //     default: true
    //   },    
    //   {
    //     type: 'input',
    //     name: 'testsInfo',
    //     message: 'Please include tests and examples on how to run them.',
    //     when: ({ confirmTests }) => {
    //       if (confirmTests) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     }
    //   },
    //   {
    //     type: 'input',
    //     name: 'contactInfo.email',
    //     message: 'Please enter your email address.',
    //     default: true
    //   },    
    //   {
    //     type: 'input',
    //     name: 'contactInfo.github',
    //     message: 'Please enter your github website.',
    //     default: true
    //   },   
    //   {
    //     type: 'input',
    //     name: 'contactInfo.website',
    //     message: 'Please enter your personal website address.',
    //     default: false
    //   },   
    //   {
    //     type: 'input',
    //     name: 'contactInfo.phone',
    //     message: 'If appropriate, add your phone number.',
    //     default: false
    //   },   
    //   {
    //     type: 'input',
    //     name: 'madeBy.madeBy',
    //     message: 'This app was made with ❤️ by: ',
    //     default: true
    //   },
    //   {
    //     type: 'input',
    //     name: 'madeBy.copyright',
    //     message: 'Copyright year: ',
    //     default: true
    //   },