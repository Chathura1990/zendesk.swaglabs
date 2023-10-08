import {And, Then, When} from "cypress-cucumber-preprocessor/steps";
import {CheckoutStepOnePage} from "../taf/pages";

const checkoutStepOnePage = new CheckoutStepOnePage();
When(/^the user fills out the shipping information with:$/, (dataTable) => {
    checkoutStepOnePage.elements.fillPersonalInfo(dataTable);
});

And(/^the user proceeds to overview page$/, () => {
    checkoutStepOnePage.elements.clickOnContinueBtn();
});

Then(/^the user should see error:$/, (dataTable) => {
    checkoutStepOnePage.elements.validateErrorMessage(dataTable);
});