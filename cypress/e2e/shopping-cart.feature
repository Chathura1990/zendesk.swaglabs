Feature: Shopping Cart Checkout Flow

  Background:
    Given the logged in valid_user on the inventory page

  Scenario: User Adds Items to Cart and Proceeds to Checkout
    Given the user adds several items to shopping cart:
      | itemName1           | itemName2               |
      | Sauce Labs Backpack | Sauce Labs Bolt T-Shirt |
    When the user clicks on the shopping cart icon with 2 items
    Then the cart should contain the 2 items:
      | itemName1               | itemPrice1 | itemName2           | itemPrice2 |
      | Sauce Labs Bolt T-Shirt | $15.99     | Sauce Labs Backpack | $29.99     |
    When the user proceeds to checkout
    Then the user should be on the /checkout-step-one.html page

    # This scenario is a possible bug and a security whole.
      # There should be an error message when the user clicks on checkout button without items on the cart
  Scenario: User mistakenly proceeds with zero items on the cart
    When the user clicks on the shopping cart icon with 0 items
    And the user proceeds to checkout
    Then the user should not be on the /checkout-step-one.html page



