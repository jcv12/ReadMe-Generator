function generateReadme(answers) {
    return `
  <h1 align='center'>${answers.name}</h1>

  <p align="center">
    <img src="https://img.shields.io/github/repo-size/${answers.username}/${answers.reponame}" />
    <img src="https://img.shields.io/github/issues/${answers.username}/${answers.reponame}" />
    <img src="https://img.shields.io/github/last-commit/${answers.username}/${answers.reponame}" >
    <img src="https://img.shields.io/badge/license-${answers.license}-brightgreen" >
  </p>
    
  ## Description
  ${answers.describe}

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
  ${answers.languages.join(', ')}

  ## Usage
  ${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  ${answers.questions}<br />
  <br />
  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
  <br />
  Email me with any questions: ${answers.email}<br /><br />

  _This README was made by [README-generator](https://github.com/jcv12/ReadMe-Generator)_
  `;
}

  module.exports = generateReadme;  