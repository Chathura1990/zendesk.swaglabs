Feature: Product Details and Shopping Cart Interaction

  Background:
    Given the logged in valid_user on the inventory page

#two scenarios should fail due to wrong description (Sauce Labs Backpack & Test.allTheThings() T-Shirt (Red)) possible bugs
  Scenario Outline: User checks <itemName> price, description, and adds it to the cart
    When the user selects the <itemName> item to view more details
    Then the user redirects to <expectedPage> page with id <itemId>
    And the user views the full description of the <itemName> item
    And the user goes back to products page
    Then the user selects the product <itemName> and adds it to the cart

    Examples:
      | itemName                 | expectedPage         | itemId |
      | Sauce Labs Bike Light    | /inventory-item.html | 0      |
      | Sauce Labs Backpack      | /inventory-item.html | 4      |
      | Sauce Labs Bolt T-Shirt  | /inventory-item.html | 1      |
      | Sauce Labs Fleece Jacket | /inventory-item.html | 5      |
      | T-Shirt (Red)            | /inventory-item.html | 3      |
      | Sauce Labs Onesie        | /inventory-item.html | 2      |

  Scenario Outline: User adds <itemName> item to the cart and continues to cart page
    When the user selects the product <itemName> and adds it to the cart
    And the user clicks on the shopping cart icon with <itemNumber> items
    Then the user should be on the <expectedPage> page
    And the cart should contain the item <itemName> with a price of <itemPrice>

    Examples:
      | itemName                | itemNumber | expectedPage | itemPrice |
      | Sauce Labs Backpack     | 1          | /cart.html   | $29.99    |
      | Sauce Labs Bolt T-Shirt | 1          | /cart.html   | $15.99    |
