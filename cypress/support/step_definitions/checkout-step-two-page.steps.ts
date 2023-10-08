import {Then, When} from "cypress-cucumber-preprocessor/steps";
import {CheckoutStepTwoPage} from "../taf/pages";

const checkoutStepTwoPage = new CheckoutStepTwoPage();

Then(/^the selected (.*) items should be on the checkout overview page$/, (itemQty: number) => {
    checkoutStepTwoPage.elements.checkItemQty(itemQty);
});

When(/^the user verifies the item total, tax and total amount to pay:$/, (dataTable) => {
    checkoutStepTwoPage.elements.verifyPaymentInformation(dataTable);
});

When(/^the user clicks on the Finish button$/, () => {
    checkoutStepTwoPage.elements.clickFinishBtn();
});