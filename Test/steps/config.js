/**
* Creation Date: 11/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

require("babel-register")({
    presets: [ 'es2015' ]
  });

  var CucumberReport = require("../reporting/CucumberReportExtension");

const JSONREPORTS = process.cwd() + "/reports/json";

exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ["../features/*.feature"],   
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: `https://www.pokemon.com/us/pokedex/`,
    //https://www.protractortest.org/#/async-await
    SELENIUM_PROMISE_MANAGER: false,
    // Protractor's uncaughtException listener registers first so it's fired before Cucumber's listener for the same event, which would normally handle whatever error occurred inside a step definition and gracefully fail the step.
    ignoreUncaughtExceptions: true,      

    onPrepare: () => {
        CucumberReport.CucumberReportExtension.createReportFile(JSONREPORTS);                  
        browser.manage().window().setSize(1800, 1200);
        browser.waitForAngularEnabled(false);
    },
    
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox']
        },
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true, 
        format: "json:./reports/json/cucumber_report.json",       
        require: ['./*.js', '../hooks/*.js']
    },

    onComplete: () => {
        CucumberReport.CucumberReportExtension.generateCucumberReport();
    }
}