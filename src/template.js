const templateDaddy = (input) => {
    return generateProjectTitleAndDescription(input.projectInfo) +
        generateTableOfContents(input) +
        generateBuiltWithInfo(input.builtWithInfo) +
        generateInstallationInstructions(input.installInfo) +
        generateUsageDescription(input.usageInfo) +
        generateImagePreview(input.previewImage) +
        generateDeploymentLink(input.deploymentLink) +
        generateCredits(input.creditsInfo) +
        generateCollaborators(input.collaboratorsInfo) +
        generateContributingPreferences(input.contributingInfo) +
        generateTestsInstructions(input.testsInfo) +
        generateContactInfo(input.contactInfo) +
        generateLicenseBadge(input.licenseInfo) +
        generateMadeBy(input.madeBy)
}

const generateProjectTitleAndDescription = projectInfo => {
    if (projectInfo != undefined && projectInfo.title != undefined && projectInfo.description != undefined) {
            return `
# ${projectInfo.title}
## ${projectInfo.description}
    `
    } else {
        return ""
    }
};

const generateBuiltWithInfo = builtWithInfo => {
    if (builtWithInfo != undefined && builtWithInfo.languages != undefined) {
            return `
## Built With the Following:
${builtWithInfo.languages}
    `
    } else {
        return ""
    }

}

const generateTableOfContents = (objectDaddy) => {
    let showProjectInfo = false
    if (objectDaddy.projectInfo != undefined) {
        showProjectInfo = true;
    }
    let showInstallInfo = false
    if (objectDaddy.installInfo != undefined) {
        showInstallInfo = true;
    }

    let showUsageInfo = false
    if (objectDaddy.usageInfo != undefined) {
        showUsageInfo = true;
    }

    let showPreviewImage = false
    if (objectDaddy.previewImage != undefined) {
        showPreviewImage = true;
    }

    let showDeploymentLink = false
    if (objectDaddy.deploymentLink != undefined) {
        showDeploymentLink = true;
    }

    let showCreditsInfo = false
    if (objectDaddy.creditsInfo != undefined) {
        showCreditsInfo = true;
    }

    let showCollaboratorsInfo = false
    if (objectDaddy.collaboratorsInfo != undefined) {
        showCollaboratorsInfo = true;
    }

    let showContributingInfo = false
    if (objectDaddy.contributingInfo != undefined) {
        showContributingInfo = true;
    }

    let showTestsInfo = false
    if (objectDaddy.testsInfo != undefined) {
        showTestsInfo = true;
    }

    let showContactInfo = false
    if (objectDaddy.contactInfo != undefined) {
        showContactInfo = true;
    }

    let showLicenseBadgeInfo = false
    if (objectDaddy.licenseInfo != undefined) {
        showLicenseBadgeInfo = true;
    }

    let showMadeBy = false
    if (objectDaddy.madeBy != undefined) {
        showMadeBy = true;
    }

    let tableOfContentsList = ""

    if (showProjectInfo) {
        let title = objectDaddy.projectInfo.title.toLowerCase()
        title.split(' ').join('-')

        tableOfContentsList += `[Project Information](#${title.split(' ').join('-')})<br />`
    }

    if (showInstallInfo) {
        tableOfContentsList += "[Installation Instructions](#installation-instructions)<br />"
    }

    if (showUsageInfo) {
        tableOfContentsList += "[Usage](#how-to-use)<br />"
    }

    if (showPreviewImage) {
        tableOfContentsList += "[Preview](#preview)<br />"
    }

    if (showDeploymentLink) {
        tableOfContentsList += "[Website](#website)<br />"
    }

    if (showCreditsInfo) {
        tableOfContentsList += "[Credits](#credits)<br />"
    }

    if (showCollaboratorsInfo) {
        tableOfContentsList += "[Collaborators](#collaborators)<br />"
    }

    if (showContributingInfo) {
        tableOfContentsList += "[Contributing](#contributing)<br />"
    }

    if (showTestsInfo) {
        tableOfContentsList += "[Tests](#testsing)<br />"
    }

    if (showContactInfo) {
        tableOfContentsList += "[Contact Me](#contact-me)<br />"
    }

    if (showLicenseBadgeInfo) {
        tableOfContentsList += "[Badges](#badges<br />"
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
    if (installInfo != undefined && installInfo.instructions != undefined) {
            return `
## Installation Instructions:
${installInfo.instructions}`
    } else {
        return ""
    }
}

const generateUsageDescription = usageInfo => {
    if (usageInfo != undefined && usageInfo.uses != undefined) {
    return `
## How to Use:
${usageInfo.uses}
    `        
    } else {
        return ""
    }
}

const generateImagePreview = previewImage => {
    if (previewImage != undefined && previewImage.url != undefined) {
    return `
## Preview:
![Preview](${previewImage.url})
    `        
    } else {
        return ""
    }
}

const generateDeploymentLink = deploymentLink => {
    if (deploymentLink != undefined && deploymentLink.url != undefined) {
        return `
## Website:
Deployed Site: [${deploymentLink.url}](#${deploymentLink.url})`
    } else {
       return "" 
    }
}

const generateCredits = creditsInfo => {
    if (creditsInfo != undefined && creditsInfo.credits != undefined) {
    return `
## Credits:
${creditsInfo.credits}`
    } else {
        return ""
    }
}

const generateCollaborators = collaboratorsInfo => {
    if (collaboratorsInfo != undefined && collaboratorsInfo.collaborators != undefined) {
    return `
## Collaborators:
${collaboratorsInfo.collaborators}`
    } else {
        return ""
    }
}

const generateContributingPreferences = contributingInfo => {
    if (contributingInfo != undefined && contributingInfo.contributing != undefined) {
    return `
## Contributing:
${contributingInfo.contributing}`
    } else {
        return ""
    }
}

const generateTestsInstructions = testsInfo => {
    if (testsInfo != undefined && testsInfo.tests != undefined) {
        return `
## Testing:
${testsInfo.tests}
`
    } else {
        return ""
    }    
}

const generateContactInfo = contactInfo => {
    if (contactInfo != undefined && contactInfo.email != undefined && contactInfo.github != undefined && contactInfo.website != undefined && contactInfo.phone != undefined) {
        return `
## Contact Me:
Email: [${contactInfo.email}](${contactInfo.email})\n
Github: [${contactInfo.github}](${contactInfo.github})\n
Website: [${contactInfo.website}](${contactInfo.website})\n
Phone Number: ${contactInfo.phone}\n
`
    } else {
        return ""
    }
}

const generateLicenseBadge = licenseInfo => {
    if (licenseInfo != undefined && licenseInfo.message != undefined && licenseInfo.color != undefined) {
        return `
## Badges:
![license](https://img.shields.io/badge/license-${licenseInfo.message}-${licenseInfo.color})
        `
    }
    else {
        return ""
    }
}

const generateMadeBy = madeByInfo => {
    if (madeByInfo != undefined) {
        return `
## Made By:
${madeByInfo.madeBy}\n
${madeByInfo.copyright}`
    } else {
        return ""
    }
}


    module.exports = {
        templateDaddy
    };