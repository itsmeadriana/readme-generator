const templateDaddy = (input) => {
    return generateProjectTitleAndDescription(input) + 
    generateTableOfContents(input) + 
    generateInstallationInstructions(input) +
    generateUsageDescription(input) + 
    generateImagePreview(input) + 
    generateCreditsAndCollaborators(input) + 
    generateContributingPreferences(input) + 
    generateTestsInstructions(input) + 
    generateMadeBy(input)
}

const generateProjectTitleAndDescription = projectInfo => {
    return `# Thanos Is A Wrinkly Purple Testicle`
};

const generateTableOfContents = (tableInfo) => {
    return `
## Table of Contents:
    - Installation
    - Credits
    - Usage
    - License
    - Badges
    - Contributing
    - Tests
    - Made By
        `
}

const generateInstallationInstructions = installInfo => {
    return `
## Installation Instructions:
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