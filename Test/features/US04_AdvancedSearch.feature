Feature: US04 - Search Pokemons by all the available criterias
    As Pokédex user
    I want be able to search Pokemons by Ability, Height, Weight
    Number Range, Type and Weakness 
    So I choose which Pokemon I want

@MANUAL
Scenario: Search Pokemons by Ability
    Given I'm on the Pokedex search page
    When I search by the Ability 'Aftermath'    
    Then I should see just the Pokemons matching this criteria

@MANUAL
Scenario: Search Pokemons by Height
    Given I'm on the Pokedex search page
    When I search by the Height    
    Then I should see just the Pokemons matching this criteria

@MANUAL
Scenario: Search Pokemons by Weight
    Given I'm on the Pokedex search page
    When I search by the Weight    
    Then I should see just the Pokemons matching this criteria

@MANUAL
Scenario: Search Pokemons by number range
    Given I'm on the Pokedex search page
    When I search by a number Range
    Then I should see just the Pokemons matching this criteria

@MANUAL
Scenario Outline: Search Pokemons by Type and Weakness
    Given I'm on the Pokedex search page
    When I select the type '<type>'
    And I select the type '<Weakness>'
    Then I should see just the Pokemons matching this criteria

    Examples:
    | type    | Weakness  | 
    | Bug     | Flighting | 
    | Dragon  | Fairy     | 
    | Fairy   | Water     | 
    | Fire    | Rock      | 
    | Ghost   | Poison    | 
    | Ground  | Ice       | 
    | Normal  | Grass     |
    | Psychic | Flying    | 
    | Stell   | Eletric   | 
    | Dark    | Steel     | 
    | Eletric | Psychic   | 
    | Flying  | Normal    | 
    | Grass   | Ground    | 
    | Ice     | Ghost     | 
    | Poison  | Fire      | 
    | Tock    | Fairy     |
    | Water   | Dragon    |  
