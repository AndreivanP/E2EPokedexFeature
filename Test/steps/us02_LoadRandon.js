/**
* Creation Date: 11/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import pokePage from '../pages/pokePage';
import {Given, When, Then, setDefaultTimeout} from 'cucumber';
import { expect } from "chai";

setDefaultTimeout(75000);

When('I generate randons Pokemons', async () => {    
    await pokePage.surprisemeBtnClick();
});

When('I select the option to load more Pokemons', async () => {    
    await pokePage.surprisemeBtnClick();
});

Then('I should see {string} randons Pokemons', async (pokemonNumber) => {
    expect(await pokePage.pokemonCount()).to.equals(pokemonNumber);
    
})

