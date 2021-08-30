const template = require('../src/template.js')

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return template.templateDaddy(data);
}

module.exports = generateMarkdown;