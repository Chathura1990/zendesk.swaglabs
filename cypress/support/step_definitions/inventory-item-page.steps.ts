import {And, Then} from "cypress-cucumber-preprocessor/steps";
import {InventoryItemPage} from "../taf/pages";

const inventoryItemPage = new InventoryItemPage();

Then(/^the user redirects to (.*) page with id (.*)$/, (expectedPage, itemId) => {
    inventoryItemPage.elements.validateItemIdWithUrl(expectedPage, itemId);
});

And(/^the user views the full description of the (.*) item$/, (itemName) => {
    inventoryItemPage.elements.validateItemInfo(itemName);
});

And(/^the user goes back to products page$/, function () {
    inventoryItemPage.elements.clickBackToProductsBtn();
});