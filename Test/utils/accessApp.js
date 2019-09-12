/**
* Creation Date: 11/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import {config} from '../steps/config';
import {browser} from 'protractor';

export class Access{
    async accessApp() {
        await browser.get(config.baseUrl);        
    }
}

export default new Access();