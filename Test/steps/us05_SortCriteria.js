/**
* Creation Date: 14/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import pokePage from '../pages/pokePage';
import { Given, Then, setDefaultTimeout } from 'cucumber';
import { expect } from "chai";

setDefaultTimeout(75000);

let sortType;

Given('I sort the Pokemons by {string}', async (sortOption) => {
    await pokePage.clickOnSortOption(sortOption);
    sortType = sortOption;
});

Then('I should see the Pokemons properly sorted', async () => {
    let pokeName;
    switch (sortType) {
        case 'Lowest Number (First)':
            pokeName = 'Bulbasaur'
            break;
        case 'Highest Number (First)':
            pokeName = 'Melmetal'
            break;
        case 'A-Z':
            pokeName = 'Abomasnow'
            break;
        case 'Z-A':
            pokeName = 'Zygarde'
            break;
    }
    expect(await pokePage.getPokemonName()).to.equals(pokeName);
});
