const templateDaddy = (input) => {
    return generateProjectTitle(input.projectInfo) +
        generateLicenseBadgeImage(input.licenseInfo) + 
        generateProjectDescription(input.projectInfo) +    
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
        generateEmailContactInfo(input.contactInfo) +
        generateGithubContactInfo(input.contactInfo) +
        generateWebsiteContactInfo(input.contactInfo) +
        generatePhoneContactInfo(input.contactInfo) +
        generateLicense(input.licenseInfo) +
        generateMadeBy(input.madeBy)
}

const generateProjectTitle = projectInfo => {
    if (projectInfo != undefined && projectInfo.title != undefined) {
        return `
# ${projectInfo.title}`
    }
    else {
        return ""
    }
};

const generateLicenseBadgeImage = licenseInfo => {
    if (licenseInfo != undefined && licenseInfo.message != undefined && licenseInfo.color != undefined) {
        return `
![license](https://img.shields.io/badge/license-${licenseInfo.message}-${licenseInfo.color})`.split(' ').join('%20')
    }      
    else {
        return ""
    }
};

const generateProjectDescription = projectInfo => {
    if (projectInfo != undefined && projectInfo.description != undefined) {
            return `
## Description: 
${projectInfo.description}
    `
    } else {
        return ""
    }
};



const generateBuiltWithInfo = builtWithInfo => {
    if (builtWithInfo != undefined && builtWithInfo.languages != undefined) {
            return `
## Built With the Following:
- ${builtWithInfo.languages}`.split(',').join('\n - ')
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
        tableOfContentsList += "[Tests](#testing)<br />"
    }

    if (showContactInfo) {
        tableOfContentsList += "[Questions](#questions)<br />"
    }

    if (showLicenseBadgeInfo) {
        tableOfContentsList += "[License](#license)<br />"
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
- ${installInfo.instructions}`.split('. ').join('.\n - ');
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
[${deploymentLink.url}](#${deploymentLink.url})`
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

const generateEmailContactInfo = contactInfo => {
    if (contactInfo != undefined && contactInfo.email != undefined) {
        return `
## Questions:
Email: [${contactInfo.email}](${contactInfo.email})\n
`
    } else {
        return ""
    }
}

const generateGithubContactInfo = contactInfo => {
    if (contactInfo != undefined && contactInfo.github != undefined) {
        return `
Github: [${contactInfo.github}](${contactInfo.github})\n
`
    } else {
        return ""
    }
}

const generateWebsiteContactInfo = contactInfo => {
    if (contactInfo != undefined && contactInfo.website != undefined) {
        return `
Website: [${contactInfo.website}](${contactInfo.website})\n
`
    } else {
        return ""
    }
}

const generatePhoneContactInfo = contactInfo => {
    if (contactInfo != undefined && contactInfo.phone != undefined) {
        return `
Phone Number: ${contactInfo.phone}\n
`
    } else {
        return ""
    }
}

//This generating licenses business was a lot.

let licenseInfoLicenses = {
    "apm": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
    "aur": {
        "license": "Apache",
        "url": "https://www.apache.org/licenses/LICENSE-1.0"
    },
    "bower": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
    "cocoapods": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
    "condaLicense": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
    "cpan": {
        "license": "lgpl_2_1",
        "url": "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html"
    },
    "cranMetacran":{
        "license": "MIT + file LICENSE",
        "url": ""
    },
    "crates": {
        "license": "MIT/Apache-2.0",
        "url": "https://crates.io/crates/opener/0.5.0"
    },
    "ctan": {
        "license": "ppl1.3c, ofl",
        "url": "https://ctan.org/license/lppl1.3c"
    },
    "dub": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
    "eclipseMarket": {
        "license": "GPL",
        "url": "https://choosealicense.com/licenses/gpl-3.0/"
    },
    "gitHub": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
    "hex": {
        "license": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.txt"
    },
    "npm": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
    "oreLicense": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
    "packagistLicense": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
    "packagistLicenseCs": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
    "pypiLicense": {
        "license": "BSD",
        "url": "https://choosealicense.com/licenses/0bsd/"
    },
    "reuseCompliance": {
        "license": "compliant",
        "url": "https://reuse.software/spec/"
    },
    "weblateComponentLicense": {
        "license": "MIT",
        "url": "https://choosealicense.com/licenses/mit/"
    },
}


let generateLicense = licenseInfo => {
    if (licenseInfo != undefined && licenseInfo.message != undefined && licenseInfo.color != undefined) {
        let url = licenseInfoLicenses[`${licenseInfo.message}`].url
        return `
## License\n` +
`[Link](${url})`
    } else {
        return ""
    }
}

const generateMadeBy = madeByInfo => {
    if (madeByInfo != undefined) {
        return `
### Made By
© Copyright ${madeByInfo.copyright} ${madeByInfo.madeBy}
`
    } else {
        return ""
    }
}

module.exports = {
    templateDaddy
};