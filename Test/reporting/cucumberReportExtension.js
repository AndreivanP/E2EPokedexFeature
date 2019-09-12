/**
* Creation Date: 12/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var report = require("cucumber-html-reporter");
var mkdirp = require("mkdirp");
var CucumberReportExtension = /** @class */ (function () {
    function CucumberReportExtension() {
    }
    /**
     * @description:method responsible for create report file
     * @param dirName: name of diretory
     */
    CucumberReportExtension.createReportFile = function (dirName) {
        if (!fs.existsSync(dirName))
            mkdirp.sync(dirName);
    };
    /**
     * @description: method responsible for generate cucumber report
     */
    CucumberReportExtension.generateCucumberReport = function () {
        report.generate(this.cucumberReporterOptions);
    };
    
    CucumberReportExtension.jsonDir = process.cwd() + "\\reports\\json";
    CucumberReportExtension.htmlDir = process.cwd() + "\\reports\\html";
    CucumberReportExtension.jsonFile = CucumberReportExtension.jsonDir + "\\cucumber_report.json";
    CucumberReportExtension.cucumberReporterOptions = {
        theme: "bootstrap",
        jsonFile: CucumberReportExtension.jsonFile,
        output: CucumberReportExtension.htmlDir + "\\cucumber_reporter.html",
        reportSuiteAsScenarios: true,
        metadata: {
            "App Version": "1.0.0",
            "Test Environment": "Testing",
            "Browser": "Chrome  76",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local environment"
        }
    };
    return CucumberReportExtension;
}());
exports.CucumberReportExtension = CucumberReportExtension;
