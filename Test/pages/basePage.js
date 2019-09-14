/**
* Creation Date: 11/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

export default class BasePage {
    constructor() {
        /**
        * Webdriver equivalent to hitting Enter/Return key.
        */
        this.hitEnter = function () {
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
        }

    }

    async waitElementClickable(item, timeout = 10000) {
        const EXPECTEDCONDITIONS = protractor.ExpectedConditions;
        return await browser.wait(
            EXPECTEDCONDITIONS.elementToBeClickable(item), timeout).catch(
                function (error) {
                    console.log("waitElementClickable Wait error:", error);
                }
            );
    }

    async waitElementInvisible(item, timeout = 10000) {
        const EXPECTEDCONDITIONS = protractor.ExpectedConditions;
        return await browser.wait(
            EXPECTEDCONDITIONS.invisibilityOf(item), timeout).catch(
                function (error) {
                    console.log("waitElementInvisible Wait error:", error);
                }
            );
    }

    async waitElementPresence(item, timeout = 10000) {
        const EXPECTEDCONDITIONS = protractor.ExpectedConditions;
        return await browser.wait(
            EXPECTEDCONDITIONS.presenceOf(item), timeout).catch(
                function (error) {
                    console.log("waitElementPresence Wait error:", error);
                }
            );
    }

    /**
     * switches focus to a new (last) window
     */
    async switchToNewWindow() {
        await browser.getAllWindowHandles().then(handles => {
            browser.switchTo().window(handles[handles.length - 1]);
        });
    }

    /**
     * close the current window and switch to its parent window
     * @param {obj} parentPage - the parent page object we want to load
     */
    async closeNewWindow() {
        await browser.getAllWindowHandles().then(handles => {
            browser.close();
            // the parent should be 2 less than the length of all found window handlers
            browser.switchTo().window(handles.length - 2);
        });
    }

    async scrollUp() {
        await browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    }

    async scrollDown() {
        await browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED DOWN+++++');
        });
    }
}