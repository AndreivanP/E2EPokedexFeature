/**
* Creation Date: 11/09/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import BasePage from './basePage';
import {element, browser} from 'protractor';
import searchHelper from '../utils/searchHelper';

class PokePage extends BasePage {
    constructor () {
        super();
        this.pokemonClass = '.pokemon-info'
        this.pokemonName = element(by.css(`${this.pokemonClass} h5`));
        this.messagePokeNotFound = element(by.css('.alert.alert-error h3'));   
        this.surprisemeBtn = element(by.id('shuffle'));
        this.pokemonAmount = element.all(by.css(this.pokemonClass));
        this.cookieOk = element(by.id('cookie-dismisser'));    
        this.loadMoreBtn = element(by.id('loadMore'));
        this.pokemonFigure = element(by.css('.animating figure'));
        this.loader = element(by.css('.loader'));
    }

    // Get the first Pokemon name
    async getPokemonName() {
        await this.waitElementPresence( this.pokemonName);       
        let name = await this.pokemonName.getText();
        return name; 
    }
    
    // Get the message when no Pokemon is found
    async getMessageNotFound() {
        await this.waitElementPresence(this.messagePokeNotFound);   
        let message = this.messagePokeNotFound.getText();
        return message; 
    }  
    
    // Hit the Surprise Me button
    async surprisemeBtnClick() {
        await this.waitElementClickable(this.surprisemeBtn);
        await this.surprisemeBtn.click(); 
        await this.waitElementInvisible(this.loader);       
    }

    async loadMoreBtnClick() {
        await this.surprisemeBtnClick();
        this.scrollDown();
        await this.loadMoreBtn.click();
        await this.waitElementInvisible(this.loader);        
    }

    // Count the amount of Pokemons present on the DOM
    async pokemonCount() {
        await this.waitElementClickable(this.pokemonName);
        let element = await this.pokemonAmount;        
        return element
    }

    async pokemonFigureClick() {
        await this.waitElementClickable(this.pokemonFigure);        
        await this.pokemonFigure.click();
    }
}

export default new PokePage();
