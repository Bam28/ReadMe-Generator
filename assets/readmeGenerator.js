class contentReadMe {
    static generateReadMe(answers) {
        return `
        # ${answers.title}
        ##Table Content
        -[Project Description](#Description)
        -[Usage](#Usage)
        -[Contributing](#Contributing)
        -[Installation](#Installation)
        -[Questions](#Questions)
        -[License](#License)

        ##Description
        ${answers.description}

        ##Usage
        ${answers.usage}

        ##Installation
        ${answers.installation}

        ##Contributing
        ${answers.contributing}

        ##
        `
    }
}

module.exports = contentReadMe