const inquirer = require('inquirer')
const fs = require('fs')
const contentReadMe = require('./readmeGenerator.js')

inquirer
    .prompt([
        {
          type: 'input',
          message: 'Title of the project?',
          name: 'title',
        },
        {
          type: 'input',
          message: 'Brief description of your project',
          name: 'description',
        },          
        {
          type: 'input',
          message: 'How should they install it?',
          name: 'installation',
        },
        {
          type: 'input',
          message: 'How to use it?',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'Licence',
          name: 'licence',
        },
        {
          type: 'input',
          message: 'Contributiong guidelines?',
          name: 'contributing',
        },
        {
          type: 'input',
          message: 'Test intructions',
          name: 'testInstruction',
        },
  ])
  .then((answers) => {
    const content = contentReadMe.generateReadMe(answers)
    fs.writeFile('./README.md', content, function(err) {
      if(err) {
        console.log('Couldnt save the file')
      } else {
        console.log('Success new file generator inside the current file')
      }
    })
  })
  .catch((error) => {
    console.log(error)
  })