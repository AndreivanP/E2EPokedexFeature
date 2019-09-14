/**
* Creation Date: 11/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import BasePage from './basePage';
import { element } from 'protractor';

class PokeDetailsPage extends BasePage {
    constructor() {
        super();
        this.pokeName = element(by.css('.pokedex-pokemon-pagination-title div'));
        this.attributesValue = element.all(by.css('.attribute-value'));
        this.nextPokemon = element(by.css('.icon.icon_arrow_sm_right'));
        this.previousPokemon = element(by.css('.previous'));

    }

    async returnPokemonName() {
        await this.waitElementClickable(this.pokeName);
        return await this.pokeName.getText();
    }

    async goToTheNextPokemon() {
        await this.waitElementClickable(this.nextPokemon);
        await this.nextPokemon.click();
    }

    async goToThePreviousPokemon() {
        await this.waitElementClickable(this.previousPokemon);
        await this.previousPokemon.click();
    }

}

export default new PokeDetailsPage();
