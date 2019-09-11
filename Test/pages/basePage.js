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
     * Wrappers for expected conditions 
     * @returns {ExpectedCondition}
     */
    isVisible(locator) {
        return protractor.ExpectedConditions.visibilityOf(locator);
    }

    isNotVisible(locator) {
        return protractor.ExpectedConditions.invisibilityOf(locator);
    }

    inDom(locator) {
        return protractor.ExpectedConditions.presenceOf(locator);
    }

    notInDom(locator) {
        return protractor.ExpectedConditions.stalenessOf(locator);
    }

    isClickable(locator) {
        return protractor.ExpectedConditions.elementToBeClickable(locator);
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

    hasText(locator, text) {
        return protractor.ExpectedConditions.textToBePresentInElement(locator, text);
    }

    and(arrayOfFunctions) {
        return protractor.ExpectedConditions.and(arrayOfFunctions);
    }

    titleIs(title) {
        return protractor.ExpectedConditions.titleIs(title);
    }

    /**
     * Webdriver equivalent to hitting Enter/Return key.
     */
    async hitEnter() {
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
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
}