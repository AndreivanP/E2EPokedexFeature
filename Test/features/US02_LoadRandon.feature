Feature: US02 - Load randon Pokemons
     As Pokédex user
     I want be able to get randon Pokemons
     So I choose which Pokemon I want

@REGRESSION
Scenario: Generate randon Pokemons
    Given I'm on the Pokedex search page
    When I generate randons Pokemons    
    Then I should see '12' randons Pokemons

@REGRESSION
Scenario: Load more Pokemons
    Given I'm on the Pokedex search page
    When I select the option to load more Pokemons    
    Then I should see '24' randons Pokemons