const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generatePage = require('./src/page-template');

const promptUser = () => {
  console.log(`
  =================
  Add a New Project
  =================
  `)
  return inquirer.prompt([
    {
      type: 'input', 
      name: 'name',
      message: 'What is the project title (Required)',
      validate: projectName => {
        if (projectName) {
          return true;
        } else {
          console.log('Please enter ypur project title');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'describe',
      message: 'Enter a description (Required)',
      validate: describe => {
        if (describe) {
          return true;
        } else {
          console.log('Please enter a description');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'installation',
      message: 'Describe the installation process of this project if any.',
      default: true
    },

    {
      type: 'input',
      name: 'about',
      message: 'What is the project usage for?',
      when: ({ confirmAbout }) => confirmAbout
    },

    {
      type: 'list',
      name: 'license',
      message: 'Choose the license for this project(Hit space to select): ',
      choices: [
        'Apache',
        'Academic',
        'GNU',
        'ISC',
        'MIT',
        'Mozilla',
        'Open'
      ]
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects?"
  },
  {
      type: "input",
      name: "tests",
      message: "Is there a test included?"
  },
  {
      type: "input",
      name: "questions",
      message: "What do I do if I have an issue? "
  },
  {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: "
  },
  {
      type: "input",
      name: "email",
      message: "Please enter your email: "
  }
  ]);
}

async function init() {
  try {
    const answers = await promptUser();
    const generateContent = generateReadme(answers);
    await writeFileAsync('./dist/README.md', generateContent);
    console.log('Successfully wrote to README.md');
  } catch(err) {
    console.log(err)
  }
}

init()