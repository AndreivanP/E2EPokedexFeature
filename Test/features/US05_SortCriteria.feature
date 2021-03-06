Feature: US05 - Sort Pokemon results
     As Pokédex user
     I want be able to sort the Pokemons result by
     Lowest Number (First), Highest Number(First), A-Z and Z-A
     So I can see the sorted Pokemons

@REGRESSION
Scenario Outline: Sort Pokemon results 
    Given I'm on the Pokedex search page
    When I sort the Pokemons by '<sortCriteria>'    
    Then I should see the Pokemons properly sorted

    Examples:
    | sortCriteria           | 
    | Lowest Number (First)  |
    | Highest Number (First) |
    | A-Z                    |
    | Z-A                    |


