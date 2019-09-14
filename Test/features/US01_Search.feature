Feature: US01 - Search Pokémon by name or number
    As Pokédex user
    I want be able to search the Pokémon databe by name or number
    So I can find out my Pokémons


Background: Go to Pokedex search page
    Given I'm on the Pokedex search page

# This scenario is passing just because I'm waiting the loader become invisible. 
# It's a bug since the user is able to use the search before the loader disapear
# and in this case the search won't work.
@REGRESSION
Scenario Outline: Search Pokémon by a valid name    
    When I search for the Pokemon name '<pokeName>'    
    Then I should see on the search results just the '<pokeName>'

    Examples:
    |pokeName  |
    |Kakuna    |
    |Dragonair |

@REGRESSION
Scenario Outline: Search Pokémon by an invalid name    
    When I search for the Pokemon name '<pokeName>'    
    Then I should see a message on the search results

    Examples:
    |pokeName  |
    |asdfgh    |
    |123456678 |

#This scenario is a bug automation for the search feature
@REGRESSION @FAILING
Scenario: Search Pokémon after use other button    
    When I enter the Pokemon name 'Charmander'
    And I use some other page button
    And I apply my search  
    Then I should see on the search results just the 'Charmander'

@MANUAL
Scenario: Search Pokémon by an huge invalid name    
    When I search for the Pokemon name with 3000 characters   
    Then I should see a message on the search results


