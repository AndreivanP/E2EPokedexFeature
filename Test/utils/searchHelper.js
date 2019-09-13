/**
* Creation Date: 11/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

class SearchHelper {

    async waitForUniqueElement(elementClass, timeout = 10000) {
        var start = Date.now();
        let elementCount = null;
        let repeat = true;
         while (repeat) {            
            elementCount = await element.all(by.css(elementClass)).count();            
            if (Date.now() - start >= timeout) {
                console.log("Timeout reached finding " + elementCount + " elements in waitElementCount for class: " + elementClass);
                return "timeout";
            }
            if (elementCount == 1) {
               repeat = false;
            }                   
        }        
        return true;
    }
}

export default new SearchHelper();