// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ##  License

  ${data.license}

  ## Contributing
  
  ${data.contributing}

  ## Testing
  
  ${data.test}

  ## Questions
  
  If you have any questions about the repo, please contact me at ${data.email}.

  You can find more of my work and projects at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
