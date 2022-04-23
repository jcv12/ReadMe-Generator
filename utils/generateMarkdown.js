
const generateBadges = (badges,user,repo)=> {
    let badgeArray = [];
    if(!badges) {
      return '';
    }
    badges.forEach(e => {
      switch(e){
        case "Language Count":
          badgeArray.push('![GitHub language count](https://img.shields.io/github/languages/count/' + user + '/' +repo +')');
          break;
        case "Top Language":
          badgeArray.push('![GitHub top language](https://img.shields.io/github/languages/top/'+user+'/'+repo+')');
          break;
        case "Code Size":
          badgeArray.push('![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/'+user+'/'+repo+')');
          break;
        case "Repo Size":
          badgeArray.push('![GitHub repo size](https://img.shields.io/github/repo-size/'+user+'/'+repo+')');
          break;
        case "Issues":
          badgeArray.push('![GitHub issues](https://img.shields.io/github/issues-raw/'+user+'/'+repo+')');
          break;
        case "Issues Closed":
          badgeArray.push('![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/'+user+'/'+repo+')');
          break;
        case "Release Version by Date":
          badgeArray.push('![GitHub release (latest by date)](https://img.shields.io/github/v/release/'+user+'/'+repo+')');
          break;
        default:
          break;
      }
    });
    return badgeArray.join(' ');
  };
  
  const generateInstall = installText => {
    if(!installText) {
      return '';
    } 
    return `
    ## Installation
    \`\`\`shell
      ${installText}
    \`\`\`
    `;
  };
  
  const generateUsage = (usageText, user, repo) => {
    if(!usageText) {
      return '';
    }
    return `
    ## Usage
    ### Setup Instructions
    1. Clone the repo
    \`\`\`shell
    git@github.com:${user}/${repo}.git
    \`\`\`
    2. Move to the project root directory
  \`\`\`shell
  cd ${repo}
  \`\`\`
  3. Run npm install
  \`\`\`shell
  npm install
  \`\`\`
  4. Run Readme Generator
  \`\`\`shell
  ${usageText}
  \`\`\`
    `;
  };
  
  const generateLicense = (licenseBadge,user,repo) => {
    if(!licenseBadge){
      return '';
    }
    return `
    ![GitHub](https://img.shields.io/github/license/${user}/${repo}?style=plastic)
    `;
  };
  const generateLicenseInfo = (licenseBadge,licenseInfo, licenseDetail, title) => {
    let licenseBlob = '';
    if(!licenseBadge) {
      return '';
    }
    licenseBlob = licenseDetail.body.replace("[year]", new Date().getFullYear()).replace("[fullname]",title);
  
    return `
    ## License
    **Licensed under the ${licenseInfo.name}.**
   ${licenseBlob}
    `;
  };
  
  const generateTest = testInput => {
    if(!testInput) {
      return '';
    }
    return `
    ## Tests
    ${testInput}  
    `;
  };
  
  const generateContribute = contribInput => {
    if(!contribInput) {
      return '';
    }
    return `
    ## Contribute
    ${contribInput}  
    `;
  };
  
  
  const showImage = (showImageUrl,imageUrl) => {
    if(!showImageUrl){
      return '';
    }
    return `
    <img src="${imageUrl}" width="200" height="200"/>
    `;
  };
  
  
  const generateMarkdown = (data) => {
    return `
    # [${data.projectTitle}](https://github.com/${data.accountName}/${data.repoName})
    ${generateLicense(data.displayLicense,data.accountName,data.repoName)}
    ![Most recent commit](https://img.shields.io/github/last-commit/${data.accountName}/${data.repoName})
    ${generateBadges(data.badges,data.accountName,data.repoName)}
    ## Description
    ${data.description}
    ## Table of Contents
    * [Installation](##Installation)
    * [Usage](##Usage)
    * [License](##License)
    * [Tests](##Tests) 
    * [Contribute](##Contribute)
    * [Questions](##Questions)
    ${generateInstall(data.install)}
    ${generateUsage(data.use,data.accountName, data.repoName)}
    ${generateLicenseInfo(data.displayLicense,data.licenseInfo,data.licenseDetail,data.projectTitle)}
    ${generateTest(data.test)}
    ${generateContribute(data.contribute)}
  <br />
    ## Questions
  <br />
    ${showImage(data.image,data.imageUrl)}
    <br/>Email ${data.userFullName} with any support questions at <a href="mailto:${data.accountEmail}">${data.accountEmail}</a><br>
    or visit my <a href="https://github.com/${data.accountName}">GitHub Homepage</a>.
    `;
    };
  
    module.exports = generateMarkdown;