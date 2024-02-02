const fs = require('fs');
const inquirer = require('inquirer'); // common js


// Writes questions to be answered in terminal
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project. Motivation? Purpose? Lessons?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'link',
      message: 'Provide link to deployed project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'alt',
      message: 'Input alt text to be shown in cases of missing or broken image link',
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'Input location of screenshot to be included within the "Usage" area.'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third - party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
    },
    {
      type: 'input',
      name: 'features',
      message: 'If your project has a lot of features, list them here.',
    },
    {
      type: 'input',
      name: 'support',
      message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Input license type.This lets other developers know what they can and cannot do with your project.',
      choices: [
        'Apache License 2.0',
        'MIT License',
        'Eclipse Public License 2.0',
        'Mozilla Public License 2.0',
        'The Unlicense',
        'Not Applicable'
      ]
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter GitHub username.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter email address so users can connect with you.'
    },
  ])

  // Creates README structure using answers to above questions
  .then((rmBuilder) => {
    const filename = `README.md`;
    const readMe =
      `# ${rmBuilder.title}
  ${renderLicenseBadge(rmBuilder.license)}
  </br>
  </br>
  </br>
  ## Description
  
  ${rmBuilder.description}
  </br>
  </br>
  </br>
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [How To Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  </br>
  </br>
  </br>
  ## Installation
  
  ${rmBuilder.install}
  </br>
  </br>
  </br>
  ## Usage
  To view the finished product, click this <a href="${rmBuilder.link}">link!</a>
  
  ${rmBuilder.usage}
  ![${rmBuilder.alt}](${rmBuilder.screenshot})
  </br>
  </br>
  </br>
  ## Credits
  
  ${rmBuilder.credits}
  </br>
  </br>
  </br>
  ## Features
  
  ${rmBuilder.features}
  </br>
  </br>
  </br>
  ## How to Contribute
  
  ${rmBuilder.support}
  </br>
  </br>
  </br>
  ## Tests
  
  ${rmBuilder.tests}
  </br>
  </br>
  </br>
  ## License
  
  ${renderLicense(rmBuilder.license)}
  </br>
  </br>
  </br>
  ## Questions
  
  For further questions, please connect with me at <a href="https://github.com/${rmBuilder.github}">${rmBuilder.github}</a>,<br>
  or contact me via email at <a href="${rmBuilder.email}">${rmBuilder.email}</a>.`;

    // Renders license info
    function renderLicense(license) {
      if (rmBuilder.license === 'Apache License 2.0') {
        return `This project is licensed under the Apache License 2.0 - see the <a href="https://opensource.org/licenses/Apache-2.0">Apache License 2.0</a> file on OpenSourceInitiative.org for details.`;

      } else if (rmBuilder.license === 'MIT License') {
        return `This project is licensed under the MIT LICENSE - see the <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a> file on OpenSourceInitiative.org for details.`;

      } else if (rmBuilder.license === 'Eclipse Public License 2.0') {
        return `This project is licensed under the Eclipse Public License 2.0 - see the <a href="https://opensource.org/licenses/EPL-2.0">Eclipse Public License 2.0</a> file on OpenSourceInitiative.org for details.`;

      } else if (rmBuilder.license === 'Mozilla Public License 2.0') {
        return `This project is licensed under the Mozilla Public License 2.0 - see the <a href="https://opensource.org/licenses/MPL-2.0">Mozilla Public License 2.0</a> file on OpenSourceInitiative.org for details. `;

      } else if (rmBuilder.license === 'The Unlicense') {
        return `This project is licensed under the The Unlicense - see the <a href="https://spdx.org/licenses/Unlicense.html">Unlicense</a> file on OpenSourceInitiative.org for details.`;

      } else if (rmBuilder.license === 'Not Applicable') {
        return '';

      } else {
        return '';
      };
    };

    // Renders license badge
    function renderLicenseBadge(license) {
      if (rmBuilder.license === 'Apache License 2.0') {
        return `![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;

      } else if (rmBuilder.license === 'MIT License') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;

      } else if (rmBuilder.license === 'Eclipse Public License 2.0') {
        return `![License: EPL-2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)`;

      } else if (rmBuilder.license === 'Mozilla Public License 2.0') {
        return `![License: MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;

      } else if (rmBuilder.license === 'The Unlicense') {
        return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;

      } else if (rmBuilder.license === 'Not Applicable') {
        return '';

      } else {
        return '';
      }
    }

    // Writes new README file
    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Successfully created README')
    )
  });