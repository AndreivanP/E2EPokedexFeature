/**
* Creation Date: 11/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import BasePage from './basePage';
import {element} from 'protractor';

class SearchPage extends BasePage {
    constructor ()  {
        super();
        this.searchField = element(by.id('searchInput'));
        this.searchBtn = element(by.css('.button.button-search'));        
    }

    // Search for a Pokemon by enter the name and hit the search button
    async searchPokemon(pokemonName) {        
        await this.waitElementClickable(this.searchField);
        await this.searchField.sendKeys(pokemonName);
        await this.searchBtn.click();
    }

    async enterPokemonName(pokemonName) {        
        await this.waitElementClickable(this.searchField);
        await this.searchField.sendKeys(pokemonName);        
    }

    async hitSearchBtn() { 
        this.scrollToTop();    
        await this.waitElementClickable(this.searchBtn);   
        await this.searchBtn.click();       
    }
    

}

export default new SearchPage();
