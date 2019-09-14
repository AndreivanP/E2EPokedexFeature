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
import { When, Then, setDefaultTimeout } from 'cucumber';
import { expect } from "chai";

setDefaultTimeout(75000);


When('I search for the Pokemon name {string}', async (pokeName) => {
    await searchPage.searchPokemon(pokeName);
});

When('I enter the Pokemon name {string}', async (pokeName) => {
    await searchPage.enterPokemonName(pokeName);
});

When('I use some other page button', async () => {
    await pokePage.surprisemeBtnClick();
});

When('I apply my search', async () => {
    await searchPage.hitSearchBtn();
});

Then('I should see on the search results just the {string}', async (pokeName) => {
    await searchHelper.waitForUniqueElement(pokePage.pokemonClass);
    expect(await pokePage.getPokemonName()).to.equals(pokeName);
})

Then('I should see a message on the search results', async () => {
    expect(await pokePage.getMessageNotFound()).to.equals("No Pokémon Matched Your Search!");
})

