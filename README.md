
# E2EPokedexFeature
=====================================================================================================
This file is to guide you in order to setup and run the automation project
- This framework use the tools Cucumber, Protractor and Chai. It was built using Javascript language

=====================================================================================================
Setup the environment:

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
Test plan details:

- The .feature files can be consider as a test plan where the scenarios would be the test cases.
- The automated scenarios are tagged as "@REGRESSION".
- The failed scenarios are tagged as "@FAILING".
- Those scenarios tagged as "@MANUAL" are not automated yet but are part of the test plan and they
  can be automated in the future if needed

=====================================================================================================