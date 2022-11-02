
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Description](#Description)

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## License 
${data.license}

## GitHub UserName
${data.Username}

## Any Questions Contact:
${data.Email}


`;
}

module.exports = generateMarkdown;
