
const inquirer = require('inquirer')
const markdown = require('./utils/generateMarkdown')
const fs = require('fs')

const questions = [ {
    type: 'input',
    message: 'What is the project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'A description of the project',
    name: 'Description',
},
{
    type: 'input',
    name: 'Installation',
    message: 'Describe the installation process?',
},
{
    type: 'input',
    name: 'Usage',
    message: 'What is this project usage for?'
},
{
    type: 'list',
    message: 'What license does this fall under?',
    name: 'license',
    choices: ['Apache', 'AGB', 'MIT'],
  },
{
    type: 'input',
    message: 'What is your github Username?',
    name: 'Username',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'Email',
},
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err): console.log('Finished')
    }) 
}

function init() {
    inquirer.prompt(questions).then(data=>{
        console.log(data)
   console.log (markdown(data))
   writeToFile('Readme.md', markdown(data) )

        

})

}

init();
