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
      name: 'usage',
      message: 'Provide instructions and examples for use.',
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
      name: 'license',
      message: 'Input license type.This lets other developers know what they can and cannot do with your project.',
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
      message: 'Go the extra mile and write tests for your application.Then provide examples on how to run them here.',
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

    ![alt text](${rmBuilder.screenshot})

## Credits

${rmBuilder.credits}

## License

${rmBuilder.license}

    ---

## Features

${rmBuilder.features}

## How to Contribute

${rmBuilder.support}

## Tests

${rmBuilder.tests}`;


    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Sucessfully created README')
    )
  });

