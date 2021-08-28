const templateDaddy = (input) => {
    return generateProjectTitleAndDescription(input.projectInfo) + 
    generateTableOfContents(input) + 
    generateInstallationInstructions(input.installInfo) +
    generateUsageDescription(input) + 
    generateImagePreview(input) + 
    generateCreditsAndCollaborators(input) + 
    generateContributingPreferences(input) + 
    generateTestsInstructions(input) + 
    generateMadeBy(input)
}

const generateProjectTitleAndDescription = projectInfo => {
    return `
# ${projectInfo.title}
## ${projectInfo.description}
    `
};

const generateTableOfContents = (objectDaddy) => {
let showProjectInfo = false
if (objectDaddy.projectInfo != null) {
    showProjectInfo = true;
}
let showInstallInfo = false
if (objectDaddy.installInfo != null) {
    showInstallInfo = true;
}

let tableOfContentsList = ""

if (showProjectInfo) {
    tableOfContentsList += `- [Project Information](#${objectDaddy.projectInfo.title.toLowerCase()})\n`
}

if (showInstallInfo) {
    tableOfContentsList += "- Installation\n"
}

    return `
## Table of Contents:
${tableOfContentsList}
        `
}

const generateInstallationInstructions = installInfo => {

    let instructions = installInfo.instructions
    let instructionList = ""
    instructions.forEach(instruction => {
        instructionList +=  `- ${instruction}\n`
    })

    return `
## Installation Instructions:
${instructionList}
`
}

const generateUsageDescription = usageInfo => {
    return `
## How to Use:
    `
}

const generateImagePreview = image => {
    return `
## Preview:

![Preview](src/images/solange.jpg "Solange")
    `
}

const generateCreditsAndCollaborators = creditsAndCollaboratorsInfo => {
    return `
## Credits: `
}

const generateContributingPreferences = contributingInfo => {
    return `
## Contributing:
    `
}

const generateTestsInstructions = testsInfo => {
    return `
## Testing:
    `
}

const generateMadeBy = userName => {
    return `
### Made by 
    `
}

module.exports = {
    templateDaddy
};