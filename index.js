const fs = require('fs');
const inquirer = require('inquirer');
const util = require("util");
const generateReadme = require('./dist/generateReadme')
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  console.log(`                                                                          
  ___ ___ ___ _| |   _____ ___    ___ ___ ___ 
 |  _| -_| .'| . |  |     | -_|  | . | -_|   |
 |_| |___|__,|___|  |_|_|_|___|  |_  |___|_|_|
                                 |___|        
 
  ======================
  Add A New ReadMe File
  ======================
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
      name: 'usage',
      message: 'What is the project usage for?',
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