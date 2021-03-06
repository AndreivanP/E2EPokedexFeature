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
import { Given, When, Then, setDefaultTimeout } from 'cucumber';
import { expect } from "chai";
import pokeDetailsPage from '../pages/pokeDetailsPage';
import accessApp from '../utils/accessApp';


setDefaultTimeout(75000);



Given('I\'m on the Pokedex Pokemon {string} page', async (pokemonName) => {
    await accessApp.accessAppOnPokeDetails(pokemonName);
});

When('I switch to the next Pokemon', async () => {
    await pokeDetailsPage.goToTheNextPokemon();
});

When('I switch to the previous Pokemon', async () => {
    await pokeDetailsPage.goToThePreviousPokemon();
});

When('I select the Pokemon {string}', async (pokemonName) => {
    await searchPage.searchPokemon(pokemonName);
    await searchHelper.waitForUniqueElement(pokePage.pokemonClass);
    await pokePage.pokemonFigureClick();
});

Then('I should see {string} information on a new page', async (pokemonName) => {
    expect(await pokeDetailsPage.returnPokemonName()).to.contain(pokemonName);
});

