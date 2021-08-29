const template = require('../src/template.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // return `# ${data.title}
// `;

  const projectInfo = {
    "title": "Solange",
    "description": "What really happened in the elevator??"
  }

  const installInfo = {
    "instructions": [
      "1. Download zip File.",
      "2. Open zip file.",
      "3. Install zip file."
    ]
  }

const usageInfo = {
  "uses": "This app will run on your computer."
}  

const previewImage = {
  "url": "https://media.baamboozle.com/uploads/images/24875/1613652058_50446.jpeg",
  "website": "www.google.com"
}

const creditsInfo = {
  "credits": "Brain cell 1 and brain cell 2.",
  // "creditsYes": "My mother, Mr. Rogers, and Tarzan.",
  // "creditsNo": "This project contains no credits."
  
}

const collaboratorsInfo = {
  "collaborators": "My super hot programmer boyfriend."
}

const contributingInfo = {
  "contributing": "You may contribute to the project."
  // "preference-yes": "You may contribute to this project by contacting me. See below for more details.",
  // "preference-no": "Currently, this project is closed to contributors."
}

const testsInfo = {
  "tests": "I wrote the following tests for this project:"
}

const contactInfo = {
  "email": "deuteronomy@aol.net",
  "github": "scifinerd42",
  "phone": 7897897897,
  "website": "mywebsite.geocities.com"
}

const madeBy = {
  "madeBy": "Constance Noring",
  "copyright": "Copyright 2021"
}

const objectDaddy = {
  "projectInfo": projectInfo,
  "installInfo": installInfo,
  "usageInfo": usageInfo,
  "previewImage": previewImage,
  "creditsInfo": creditsInfo,
  "collaboratorsInfo": collaboratorsInfo,
  "contributingInfo": contributingInfo,
  "testsInfo": testsInfo,
  "contactInfo": contactInfo,
  "madeBy": madeBy
}



     return template.templateDaddy(objectDaddy);
}



module.exports = generateMarkdown;