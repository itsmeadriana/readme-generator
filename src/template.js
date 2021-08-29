const templateDaddy = (input) => {
    return generateProjectTitleAndDescription(input.projectInfo) +
        generateTableOfContents(input) +
        generateInstallationInstructions(input.installInfo) +
        generateUsageDescription(input.usageInfo) +
        generateImagePreview(input.previewImage) +
        generateCreditsAndCollaborators(input.creditsInfo) +
        generateContributingPreferences(input.contributingInfo) +
        generateTestsInstructions(input.testsInfo) +
        generateContactInfo(input.contactInfo)
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

    let showUsageInfo = false
    if (objectDaddy.usageInfo != null) {
        showUsageInfo = true;
    }

    let showPreviewImage = false
    if (objectDaddy.previewImage != null) {
        showPreviewImage = true;
    }

    let showCreditsInfo = false
    if (objectDaddy.creditsInfo != null) {
        showCreditsInfo = true;
    }

    let showContributingInfo = false
    if (objectDaddy.contributingInfo != null) {
        showContributingInfo = true;
    }

    let showTestsInfo = false
    if (objectDaddy.testsInfo != null) {
        showTestsInfo = true;
    }

    let showContactInfo = false
    if (objectDaddy.contactInfo != null) {
        showContactInfo = true;
    }

    let tableOfContentsList = ""

    if (showProjectInfo) {
        tableOfContentsList += `- [Project-Information](#${objectDaddy.projectInfo.title.toLowerCase()})\n`
    }

    if (showInstallInfo) {
        tableOfContentsList += "- [Installation Instructions](#installInfo)\n"
    }

    if (showUsageInfo) {
        tableOfContentsList += "- [Usage](#usageInfo)\n"
    }

    if (showPreviewImage) {
        tableOfContentsList += "- [Preview](#previewImage)\n"
    }

    if (showCreditsInfo) {
        tableOfContentsList += "- [Credits-&-Collaborators](#${creditsInfo})\n"
    }

    if (showContributingInfo) {
        tableOfContentsList += "- [Contributing](#${contributingInfo})\n"
    }

    if (showTestsInfo) {
        tableOfContentsList += "- [Tests](#${testsInfo})\n"
    }

    if (showContactInfo) {
        tableOfContentsList += "- [Contact-Me](#${contactInfo})\n"
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
        instructionList += `- ${instruction}\n`
    })

    return `
## Installation Instructions:
${instructionList}
`
}

const generateUsageDescription = usageInfo => {
    return `
## How to Use:
${usageInfo}
    `
}

const generateImagePreview = previewImage => {
    return `
## Preview:
${previewImage}
    `
}

const generateCreditsAndCollaborators = creditsAndCollaboratorsInfo => {
    return `
## Credits:
${creditsAndCollaboratorsInfo}`
}

const generateContributingPreferences = contributingInfo => {
    return `
## Contributing:
${contributingInfo}
    `
}

const generateTestsInstructions = testsInfo => {
    return `
## Testing:
${testsInfo}
    `
}

const generateContactInfo = contactInfo => {
    return `
## Contact Me:
${contactInfo} 
    `
}

module.exports = {
    templateDaddy
};