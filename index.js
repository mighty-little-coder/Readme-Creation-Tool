const fs = require('fs');
const inquirer = require('inquirer'); // common js

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
      name: 'table',
      message: 'If your README is long, add a table of contents to make it easy for users to find what they need. Installation, Useage, Credits, License, Etc...',
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

  .then((rmBuilder) => {
    // console.log("Successfully created index.html!");
    const filename = `README.md`;
    const readMe =
      `# ${rmBuilder.title}



## Description

${rmBuilder.description}


## Table of Contents

${rmBuilder.table}


## Installation

${rmBuilder.install}


## Usage
To view the finished product, click this <a href="${rmBuilder.link}">link!</a>

![${rmBuilder.alt}](${rmBuilder.screenshot})


## Credits

${rmBuilder.credits}


## License

${rmBuilder.license}


## Features

${rmBuilder.features}


## How to Contribute

${rmBuilder.support}


## Tests

${rmBuilder.tests}


## Questions

For further questions, please connect with me at ${rmBuilder.github},
or contact me via email at ${rmBuilder.email}.`
      ;

    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Sucessfully created README')
    )
  });



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README