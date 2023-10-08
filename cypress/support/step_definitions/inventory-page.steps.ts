import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import {InventoryPage, LoginPage} from "../taf/pages";

const inventoryPage = new InventoryPage();
const loginTestStep = new LoginPage();

Given(/^the logged in (.*) on the inventory page$/, (userName) => {
    loginTestStep.elements.login(userName);
});

When(/^the user selects the (.*) item to view more details$/, (itemName) => {
    inventoryPage.elements.clickOnItem(itemName);
});

And(/^the user clicks on the shopping cart icon with (.*) items$/, (itemNumber: number) => {
    inventoryPage.elements.clickOnCartIcon(itemNumber);
});

Then(/^the user views the details of (.*) including its price and description$/, (itemName) => {
    inventoryPage.elements.validateItemInfo(itemName);
});

Then(/^the user selects the product (.*) and adds it to the cart$/, (itemName) => {
    inventoryPage.elements.addToCart(itemName);
});
