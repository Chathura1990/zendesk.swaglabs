import {And, Then, When} from "cypress-cucumber-preprocessor/steps";
import {BasePage} from "../taf/pages";

const basePage = new BasePage();
Then(/^the user should see (.*) message$/, (expectedMessage) => {
    basePage.validateMessage(expectedMessage)
});

And(/^the user should be on the (.*) page$/, (pageName) => {
    basePage.validateUrl(pageName)
});

When(/^the user goes to (.*) page$/, (pageName) => {
    cy.visit(pageName);
});

Then(/^the user should not be on the (.*) page$/, (pageName) => {
    //Usually this step should have proper error message to validate
    if (basePage.getUrl().contains(pageName)) {
        throw new Error('Please select an item and proceed');
    }
});
