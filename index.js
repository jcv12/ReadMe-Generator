const fetch = require("node-fetch");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const ghUserApi = require("./utils/githubUser.js");
const writeFile = require('./utils/generateMarkdownFile.js');

// array of questions for user
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "accountName",
      message: "What is your github username? (Required)",
      validate: (accountNameInput) => {
        if(accountNameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "accountEmail",
      message: "What is your github email address? (Required)",
      validate: (accountEmailInput) => {
        if(accountEmailInput) {
          return true;
        } else {
          console.log("Please enter your GitHub email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "repoName",
      message: "What is the name of the repository eg. repo-name? (Required)",
      validate: (projectTitleInput) => {
        if(projectTitleInput) {
          return true;
        } else {
          console.log("Please enter the name of your repository!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "projectTitle",
      message: "What is the name of the project repository? (Required)",
      validate: (projectTitleInput) => {
        if(projectTitleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "badges",
      message: "What badges would you like to display? (Check all that apply)",
      choices: [
        "Language Count",
        "Top Language",
        "Code Size",
        "Repo Size",
        "Issues",
        "Issues Closed",
        "Release Version by Date",
      ],
      default:['Issues'],
    },
    {
      type: "input",
      name: "description",
      message: "Desribe your project. (Required)",
      validate: (descInput) => {
        if(descInput) {
          return true;
        } else {
          console.log("Please enter your project description!");
          return false;
        }
      },      
    },
    {
      type: "confirm",
      name: "confirmInstall",
      message:
        "Would you like to enter some information about how install your project?",
      default: false,
    },
    {
      type: "input",
      name: "install",
      message: "How can someone install this project?:",
      when: ({ confirmInstall }) => {
        if (confirmInstall) {
          return true;
        } else {
          return false;
        }
      },
    },    
    {
      type: "confirm",
      name: "confirmUse",
      message:
        "Would you like to enter some information about how to use your project?",
      default: false,
    },
    {
      type: "input",
      name: "use",
      message: "How can someone use this project?:",
      when: ({ confirmUse }) => {
        if (confirmUse) {
          return true;
        } else {
          return false;
        }
      },
    },       
    {
      type: "confirm",
      name: "displayLicense",
      message: "Would you like to display the license used for this project?:",
      default: true,
    },
    {
      type: "confirm",
      name: "confirmTest",
      message:
        "Would you like to enter information on how is this project tested??",
      default: false,
    },
    {
      type: "input",
      name: "test",
      message: "How is this project tested?:",
      when: ({ confirmTest }) => {
        if (confirmTest) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmContribute",
      message:
        "Would you like to enter some information about how can someone contribute to this project?",
      default: false,
    },
    {
      type: "input",
      name: "contribute",
      message: "How can someone contribute to this project?:",
      when: ({ confirmContribute }) => {
        if (confirmContribute) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "image",
      message: "Would you like to display your user image?",
      default: false,
    },
  ]);
};


// function to initialize program
function init() {
  var data = {};
  promptUser()
    .then((answers) => {
      data = answers;
      return answers;
    })
    .then(ghUserData => {
      const ghUserTemp = ghUserApi.getUser(ghUserData.accountName);
      return ghUserTemp;
    })
    .then(temData => {
      data.imageUrl = temData.data.avatar_url;
      data.userFullName = temData.data.name;
    })
    .then(getRepoData =>{
      const repData = fetch('https://api.github.com/repos/'+data.accountName+'/'+data.repoName)
      .then((response) => {
        return response.json();
      })
      .then((rData) => {
        return rData;
      })
      .then(compInfo => {
        data.licenseInfo = compInfo.license;
      })
      .then(licenseDetail => {
        const licDetail = fetch(data.licenseInfo.url)
        .then((response) => {
          return response.json();
        })
        .then((lData) => {
          return lData;
        })
        .then(compLInfo => {
          data.licenseDetail = compLInfo;
         /*  console.log(data); */
        })
        .then(generateMD => {
          /* console.log(data); */
          return generateMarkdown(data);
        })
        .then(pageReadme => {
          return writeFile(pageReadme);
        })
        .then(writeFileResponse =>{
          console.log(writeFileResponse.message);
        })
        .catch(err => {
          console.log(err);
        });
      });
    });
}

// function call to initialize program
init();