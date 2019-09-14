Feature: US01 - See Pokemon details
     As Pokédex user
     I want to be able select a specific Pokemon
     So I can see his details

@REGRESSION
Scenario: Open the Pokemon details page 
    Given I'm on the Pokedex search page
    When I select the Pokemon 'Venusaur'    
    Then I should 'Venusaur' information on a new page
