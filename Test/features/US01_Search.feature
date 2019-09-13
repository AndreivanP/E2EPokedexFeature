Feature: US01 - Search Pokémon by name or number
    As Pokédex user
    I want to be able search the Pokémon databe by name or number
    So I can find out my Pokémons

#The second scenario is failing due a bug on the search feature
@REGRESSION @FAILING
Scenario Outline: Search Pokémon by a valid name
    Given I'm on the Pokedex search page
    When I search for the Pokemon name '<pokeName>'    
    Then I should see on the search results just the '<pokeName>'

    Examples:
    |pokeName  |
    |Kakuna    |
    |Dragonair |

@REGRESSION
Scenario Outline: Search Pokémon by an invalid name
    Given I'm on the Pokedex search page
    When I search for the Pokemon name '<pokeName>'    
    Then I should see a message on the search results

    Examples:
    |pokeName  |
    |asdfgh    |
    |123456678 |

#This scenario is a bug automation for the search feature
@REGRESSION @FAILING
Scenario: Search Pokémon after use other button
    Given I'm on the Pokedex search page
    When I enter the Pokemon name 'pokeName'
    And I use some other page button
    And I apply my search  
    Then I should see on the search results just the 'pokeName'

