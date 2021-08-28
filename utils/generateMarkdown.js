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

const objectDaddy = {
  "projectInfo": projectInfo,
  "installInfo": installInfo
}

     return template.templateDaddy(objectDaddy);
}



module.exports = generateMarkdown;