function generateReadme(answers) {
    return `
  <h1 align='center'>${answers.name}</h1>

  <p align="center">
    <img src="">
  </p>

  <p align="center">
    <img src="https://img.shields.io/github/repo-size/${answers.username}/${answers.reponame}" />
    <img src="https://img.shields.io/github/issues/${answers.username}/${answers.reponame}" />
    <img src="https://img.shields.io/github/last-commit/${answers.username}/${answers.reponame}" >
    <img src="https://img.shields.io/badge/license-${answers.license}-brightgreen" >
  </p>
    
  ## Description
  ${answers.describe}
  This project was built using these languages and libraries:
  ${answers.tech}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Tests
  <img src="https://img.shields.io/badge/-${answers.TTD}-%23C21325?style=for-the-badge&logo=${answers.TTD}&logoColor=white"/> </br>
  The testing platform used for this program was powered by ${answers.TTD} and can be shown in the testing folder.

  ## Questions
  ${answers.questions}<br />
  <br />
  :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
  <br />
  :e-mail: Email me with any questions: ${answers.email}<br /><br />

  _This README was made by [README-generator](https://github.com/jcv12/ReadMe-Generator)_
  `;
}

  module.exports = generateReadme;  