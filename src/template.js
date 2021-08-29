const templateDaddy = (input) => {
    return generateProjectTitleAndDescription(input.projectInfo) +
        generateTableOfContents(input) +
        generateInstallationInstructions(input.installInfo) +
        generateUsageDescription(input.usageInfo) +
        generateImagePreview(input.previewImage) +
        generateCredits(input.creditsInfo) +
        generateCollaborators(input.collaboratorsInfo) + 
        generateContributingPreferences(input.contributingInfo) +
        generateTestsInstructions(input.testsInfo) +
        generateContactInfo(input.contactInfo) +
        generateMadeBy(input.madeBy)
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

    let showCollaboratorsInfo = false
    if (objectDaddy.collaboratorsInfo != null) {
        showCollaboratorsInfo = true;
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

    let showMadeBy = false
    if (objectDaddy.madeBy != null) {
        showMadeBy = true;
    }

    let tableOfContentsList = ""

    if (showProjectInfo) {
        tableOfContentsList += `[Project Information](#${objectDaddy.projectInfo.title.toLowerCase()})\n`
    }

    if (showInstallInfo) {
        tableOfContentsList += "[Installation Instructions](#installation-instructions)\n"
    }

    if (showUsageInfo) {
        tableOfContentsList += "[Usage](#how-to-use)\n"
    }

    if (showPreviewImage) {
        tableOfContentsList += "[Preview](#preview)\n"
    }

    if (showCreditsInfo) {
        tableOfContentsList += "[Credits](#credits)\n"
    }

    if (showCollaboratorsInfo) {
        tableOfContentsList += "[Collaborators](#collaborators)\n"
    }

    if (showContributingInfo) {
        tableOfContentsList += "[Contributing](#contributing)\n"
    }

    if (showTestsInfo) {
        tableOfContentsList += "[Tests](#testsing)\n"
    }

    if (showContactInfo) {
        tableOfContentsList += "[Contact Me](#contact-me)\n"
    }

    if (showMadeBy) {
        tableOfContentsList += "[Made By](#made-by)"
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
${usageInfo.uses}
    `
}

const generateImagePreview = previewImage => {
    return `
## Preview:
![Preview](${previewImage.url})\n
Deployed Site: [${previewImage.website}](#${previewImage.website})
    `
}

const generateCredits = creditsInfo => {
    let showCreditsInfo = false
    if (creditsInfo != null && creditsInfo.credits != null) {
        showCreditsInfo = true;
    } else {
        return ""
    }
    return `
## Credits:
${creditsInfo.credits}`
}

const generateCollaborators = collaboratorsInfo => {
    let showCollaboratorsInfo = false
    if (collaboratorsInfo != null && collaboratorsInfo.collaborators != null) {
        showCollaboratorsInfo = true;
    } else {
        return ""
    }
    return `
## Collaborators:
${collaboratorsInfo.collaborators}`
}

const generateContributingPreferences = contributingInfo => {
    let showContributingInfo = false
    if (contributingInfo != null && contributingInfo.contributing != null) {
        showContributingInfo = true;
    } else {
        return ""
    }
    return `
## Contributing:
${contributingInfo.contributing}`
}

const generateTestsInstructions = testsInfo => {
    let showTestsInstructions = false
    if (testsInfo != null && testsInfo.tests != null) {
        showTestsInstructions = true;
    } else {
        return ""
    }   
    return `
## Testing:
${testsInfo.tests}
    `
}

const generateContactInfo = contactInfo => {
    let showContactInfo = false
    if (contactInfo != null && contactInfo.email != null && contactInfo.github != null && contactInfo.website != null && contactInfo.phone != null) {
        showContactInfo = true;
    } else {
        return ""
    }
    return `
## Contact Me:
Email: [${contactInfo.email}](${contactInfo.email})\n
Github: [${contactInfo.github}](${contactInfo.github})\n
Website: [${contactInfo.website}](${contactInfo.website})\n
Phone Number: ${contactInfo.phone}\n
    `
}

const generateMadeBy = madeByInfo => {
    return `
## Made By:
${madeByInfo.madeBy}\n
${madeByInfo.copyright}`
}

module.exports = {
    templateDaddy
};