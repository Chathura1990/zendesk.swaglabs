# Zendesk - Swag Labs

## Table of Contents

- [Description](#description)
- [Source code and Documentation](#source-code-and-documentation)
- [Prerequisites](#prerequisites)
- [Testing and 'How to run'](#testing)
- [Contact for more details](#contact-for-more-details)

---

### Description

This framework is designed to test the functionality of the SauceDemo website (https://www.saucedemo.com/).
It provides a set of end-to-end tests to ensure the proper functioning of the e-commerce platform.

---

## Source code and Documentation

Source Code Repository:
[GitHub](https://github.com/Chathura1990/zendesk.swaglabs.git)

---

### Prerequisites

Before you begin, ensure you have met the following requirements:

- A code editor of your choice (e.g., Visual Studio Code).
- Access to the SauceDemo website.
- Install [node](https://nodejs.org/en/) >= 16.x or 18.x
- Install [npm](https://www.npmjs.com/package/npm) >= 9.8.1
- Install [typescript](https://www.npmjs.com/package/typescript)
    - `$ npm i -g typescript`
- Configure [npm](https://www.npmjs.com/package/npm) (**Windows only**)
    - set [script-shell](https://docs.npmjs.com/misc/config#script-shell) to
      bash (using git-bash or cygwin)
      ```bash
      $ npm config set script-shell "C:\Program Files\Git\bin\bash.exe" // replace with your bash path
      ```
- Install [cypress](https://www.cypress.io/) >= 12.x
    - Note, you must delete all old version folders from the
      `...\AppData\Local\Cypress\Cache` location  
      $ npm i -g cypress@12.17.2

---

## Test Structure

The tests in this framework are organized into logical test suites, covering various aspects of the SauceDemo website,
including:

- Login functionality.
- Product browsing and selection.
- Shopping cart interaction.
- Checkout process and verification

---

# Testing

### Running Cypress E2E Tests locally

Test coverage with possible bugs

![Project Logo](/docs/test_report.jpg)

```
$ npm install --ignore-scripts=true   # might not need --ignore-scripts
$ npm run build
test commands to run
- $ npm run cypress:open
- $ npm run cypress:headless

```

# Reporting

The framework generates HTML test reports that provide detailed information about test results and any failures.
You can find the reports in the /reports directory.
(All the failed tests are possible bugs)

![Project Logo](/docs/multiplehtml.jpg)

All the screenshots and video files could find under the /reports folder

### Contact For More Details

chathurasanjeew@gmail.com