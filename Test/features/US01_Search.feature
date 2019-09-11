Feature: US01 - Search Pokémon by name or number
     As Pokédex user
     I want to be able search the Pokémon databe by name or number
     So I can find out my Pokémons

@REGRESSION
Scenario Outline: Search Pokémon by a valid name
    Given I'm on the Pokedex search page
    When I type the Pokemon name '<pokeName>'    
    Then I should see on the search results just the '<pokeName>'

    Examples:
    |pokeName  |
    |Kakuna    |
    |Dragonair |

@REGRESSION
Scenario Outline: Search Pokémon by an invalid name
    Given I'm on the Pokedex search page
    When I type the Pokemon name '<pokeName>'    
    Then I should see the message 'No Pokémon Matched Your Search!' on the search results

    Examples:
    |pokeName  |
    |asdfgh    |
    |123456678 |