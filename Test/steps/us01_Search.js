/**
* Creation Date: 11/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import pokePage from '../pages/pokePage';
import searchPage from '../pages/searchPage';
import searchHelper from '../utils/searchHelper';
import {Given, When, Then, setDefaultTimeout} from 'cucumber';
import accessApp from '../utils/accessApp';
import { expect } from "chai";
import { browser } from 'protractor';

setDefaultTimeout(75000);

When('I type the Pokemon name {string}', async (pokeName) => {    
    await searchPage.searchPokemon(pokeName);
});

Then('I should see on the search results just the {string}', async (pokeName) => {
    await searchHelper.waitForUniqueElement(pokePage.pokemonClass);
    expect(await pokePage.getPokemonName(pokeName)).to.equals(pokeName);
})

Then('I should see the message {string} on the search results', async (message) => {
    expect(await pokePage.getMessageNotFound()).to.equals(message);
})

