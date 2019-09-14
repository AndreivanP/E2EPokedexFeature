/**
* Creation Date: 11/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import { Given, setDefaultTimeout } from 'cucumber';
import accessApp from '../utils/accessApp';


setDefaultTimeout(75000);

Given('I\'m on the Pokedex search page', async () => {
    await accessApp.accessApp();
});
