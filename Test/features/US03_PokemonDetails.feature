Feature: US03 - See Pokemon details
     As Pokédex user
     I want be able to select a specific Pokemon
     So I can see his details

@REGRESSION
Scenario: Open the Pokemon details page 
    Given I'm on the Pokedex search page
    When I select the Pokemon 'Venusaur'    
    Then I should see 'Venusaur' information on a new page

@MANUAL
Scenario: Switch to the next Pokemon
    Given I'm on the Pokedex Pokemon 'Woobat' page 
    When I switch to the 'next' Pokemon      
    Then I should see the Pokemon 'Swoobat'

@MANUAL
Scenario: Switch to the previous Pokemon
    Given I'm on the Pokedex Pokemon 'Excadrill' page 
    When I switch to the 'previous' Pokemon      
    Then I should see the Pokemon 'Excadrill'

@MANUAL
Scenario: Explore more Pokemons
    Given I'm on the Pokedex Pokemon 'Charmander' page 
    When I hit the button to explore more Pokemon      
    Then I should be redirected to to Pokemon search page

@MANUAL
Scenario: Filter similar Pokemons
    Given I'm on the Pokedex Pokemon 'Charizard' page 
    When I select one of his type
    Then I should see all the Pokemons with the same type

@MANUAL
Scenario: Verify Pokemon stats
    Given I'm on the Pokedex Pokemon 'Unfezant' page       
    Then I should see his stats information

@MANUAL
Scenario: Verify Pokemon attributes
    Given I'm on the Pokedex Pokemon 'Blitzle' page       
    Then I should see his attributes information

@MANUAL
Scenario: Verify Pokemon attributes
    Given I'm on the Pokedex Pokemon 'Blitzle' page       
    Then I should see his attributes information

@MANUAL
Scenario: Verify Pokemon versions
    Given I'm on the Pokedex Pokemon 'Roggenrola' page
    When I switch the version       
    Then I should see his version information

@MANUAL
Scenario: Verify Pokemon type
    Given I'm on the Pokedex Pokemon 'Boldore' page        
    Then I should see his type information

@MANUAL
Scenario: Verify Pokemon weakness
    Given I'm on the Pokedex Pokemon 'Gigalith' page        
    Then I should see his weakness information
 
@MANUAL
Scenario: Verify Pokemon evolution
    Given I'm on the Pokedex Pokemon 'Woobat' page        
    Then I should see his evolutions information