const template = require('../src/template.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // return `# ${data.title}
  // `;
  
  // const projectInfo = {
  //   "title": "",
  //   "description": ""
  // }

  // const builtWithInfo = {
  //   "languages": []
  // }

  // const installInfo = {
  //   "instructions": ""
  // }

  // const usageInfo = {
  //   "uses": ""
  // }

  // const previewImage = {
  //   "url": ""
  // }

  // const deploymentLink = {
  //   "url": ""
  // }

  // const creditsInfo = {
  //   "credits": ""
  // }

  // const collaboratorsInfo = {
  //   "collaborators": ""
  // }

  // const contributingInfo = {
  //   "contributing": ""
  // }

  // const testsInfo = {
  //   "tests": ""
  // }

  // const contactInfo = {
  //   "email": "",
  //   "github": "",
  //   "phone": "",
  //   "website": ""
  // }

  // const madeBy = {
  //   "madeBy": "",
  //   "copyright": ""
  // }

  // const objectDaddy = {
  //   "projectInfo": projectInfo,
  //   "builtWithInfo": builtWithInfo,
  //   "installInfo": installInfo,
  //   "usageInfo": usageInfo,
  //   "previewImage": previewImage,
  //   "deploymentLink": deploymentLink,
  //   "creditsInfo": creditsInfo,
  //   "collaboratorsInfo": collaboratorsInfo,
  //   "contributingInfo": contributingInfo,
  //   "testsInfo": testsInfo,
  //   "contactInfo": contactInfo,
  //   "madeBy": madeBy
  // }



  return template.templateDaddy(data);
}



module.exports = generateMarkdown;