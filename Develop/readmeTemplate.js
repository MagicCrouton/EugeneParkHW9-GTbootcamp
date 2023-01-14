// Just modularized the readme file into a function to be exported to be used in the main index.js this 
// way the readme template can be edited outside of the main Script

function readmeTemplate(response) {
let x = 
`# ${response.title}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [How-to-Contribute](#How-to-contribute)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#license)

## Installation

${response.installation}

## Usage

${response.usage}

## Contributing

${response.credits}

## How-to-contribute

${response.contributionInstruction}

## Tests

${response.tests}

## Questions

for any questions please email inqueries to ${response.email}

## License

${response.license}`

return x}

module.exports = {
    readmeTemplate
}