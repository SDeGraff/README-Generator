// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
      Badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === "Apache 2.0") {
      Badge = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "Mozilla") {
      Badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    } else if (license === "none") {
      licenseBadge = "";
    }
    return licenseBadge;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "MIT") {
      licenseLink === "(https://opensource.org/licenses/MIT)"
    } else if (license === "Apache 2.0") {
      licenseLink === "(https://opensource.org/licenses/Apache-2.0)"
    } else if ( license === "Mozilla") {
      licenseLink === "(https://opensource.org/licenses/MPL-2.0)"
    } else (license === "none") {
      licenseLink = "";
    }
    return licenseLink;
   }
  
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if(license !== "none") {
      return `## license 
      This application is under the ${license} license.`
    } return "";
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  `;
  }
  
  module.exports = generateMarkdown;
  