=====================================================================================================
This file is to guide you in order to setup and run the project automation
- This framework use the tools Cucumber, Protractor and Chai and is build using Javascript language


=====================================================================================================
BUILD the environment:

- First of all clone this GIT repository
- Then access the path to the file package.json
- Perform the command npm install
- Perform te command npm install -g protractor
=====================================================================================================
In order to run the automation:

- Execute the command: webdriver-manager start
- Access the path /Test/steps
- Execute the command: protractor config.js --cucumberOpts.tags="REGRESSION"

=====================================================================================================