// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
  ## License
    The application has the license:
    ${renderLicenseLink(license)}
      `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}

  ## Description:
 
  ${data.description}

 -${data.why}
 -${data.what}
 -${data.challenges}

 ${renderLicenseSection(data.license)}

 ## Contact:

 - Github: https://github.com/${data.github}

 - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
