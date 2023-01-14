// this module handles the different links to badges and used inside readmeTemplate.js

const LicenseBadges = [
    {
    name: 'MIT',
    link: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    },
    {
    name: 'APACHE',
    link: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    },
    {
    name: 'GNU',
    link: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    },]

function badge (data) {
    let index = LicenseBadges.findIndex((element) => data.license === element.name);
    let x = LicenseBadges[index].link;
    return x
}

module.exports = {
    LicenseBadges,
    badge
}

