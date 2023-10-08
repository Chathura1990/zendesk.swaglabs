import {And, Given, When} from "cypress-cucumber-preprocessor/steps";
import {LoginPage} from "../taf/pages";

const loginPage = new LoginPage();

Given(/^the user is on the login page$/, () => {
    loginPage.elements.goToLoginPage();
});

When(/^the (.*) enters username and password$/, (userType) => {
    loginPage.elements.fillLoginForm(userType);
});

And(/^the user clicks the Login button$/, () => {
    loginPage.elements.clickLoginButton();
});
