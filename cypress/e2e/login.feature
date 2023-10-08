Feature: Check all user types in Login page

  Background:
    Given the user is on the login page

  Scenario Outline: <userType> logs in with valid and invalid credentials
    When the <userType> enters username and password
    And the user clicks the Login button
    Then the user should see <message> message
    And the user should be on the <expectedPage> page

    Examples:
      | userType                | message                                             | expectedPage    |
      | valid_user              | Products                                            | /inventory.html |
      | locked_out_user         | Epic sadface: Sorry, this user has been locked out. | /               |
      |                         | Epic sadface: Username is required                  | /               |
      | problem_user            | Products                                            | /inventory.html |
      | performance_glitch_user | Products                                            | /inventory.html |