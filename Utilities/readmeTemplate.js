// Just modularized the readme file into a function to be exported to be used in the main index.js this 
// way the readme template can be edited outside of the main Script
const license = require('./licenseModule.js');


function readmeTemplate(response) {

let x = 
`# ${response.title}
${license.badge(response)}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [How-to-Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${response.installation}

## Usage

${response.usage}

## Contributing

${response.credits}

## How-to-contribute

${response.contributionInstructions}

## Tests

${response.testInstructions}

## Questions

For any questions refer to the ${response.gitUserName} repository ${response.repoLink} 
or email inqueries to ${response.email}

## License

This application is covered under the ${response.license} license`

return x}

module.exports = {
    readmeTemplate
}