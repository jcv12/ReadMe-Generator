function generateReadme(answers) {
    return `
  <h1 align='center'>${answers.name}</h1>
  <img src="https://img.shields.io/github/repo-size/jcv12/ReadMe-Generator" />
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
    
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