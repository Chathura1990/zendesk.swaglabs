Feature: Item Verification and Complete Shopping Flow with Multiple Items

  Background:
    Given the logged in valid_user on the inventory page

  Scenario: User Completes Shopping Flow and Places an Order
    When the user adds several items to shopping cart:
      | itemName1           | itemName2               |
      | Sauce Labs Backpack | Sauce Labs Bolt T-Shirt |
    And the user clicks on the shopping cart icon with 2 items
    Then the cart should contain the 2 items:
      | itemName1               | itemPrice1 | itemName2           | itemPrice2 |
      | Sauce Labs Bolt T-Shirt | $15.99     | Sauce Labs Backpack | $29.99     |
    When the user proceeds to checkout
    Then the user should be on the /checkout-step-one.html page
    When the user fills out the shipping information with:
      | firstName | lastName | zipCode |
      | John      | Doe      | 12548   |
    And the user proceeds to overview page
    Then the user should be on the /checkout-step-two.html page
    And the selected 2 items should be on the checkout overview page
    When the user verifies the item total, tax and total amount to pay:
      | itemTotal | taxAmount | total  |
      | $45.98    | $3.68     | $49.66 |
    And the user clicks on the Finish button
    Then the user should see Thank you for your order! message

 # This scenario is a possible bug and a security whole.
 # There should be an error message when the user clicks on finish button without items on the cart
  Scenario: User Proceeds to Checkout with Empty Cart and Sees Thank You Message
    When the user clicks on the shopping cart icon with 0 items
    And the user proceeds to checkout
    When the user fills out the shipping information with:
      | firstName | lastName | zipCode |
      | John      | Doe      | 12548   |
    And the user proceeds to overview page
    And the user clicks on the Finish button
    Then the user should see Thank you for your order! message
    And the user should not be on the /checkout-complete.html page