import {And, Then, When} from "cypress-cucumber-preprocessor/steps";
import {CartPage, InventoryPage} from "../taf/pages";

const cartPage = new CartPage();
const inventoryPage = new InventoryPage();

When(/^the user adds several items to shopping cart:$/, (dataTable: any) => {
    const formData: {
        itemName1: string;
        itemName2: string;
    }[] = dataTable.hashes();

    formData.forEach((row) => {
        inventoryPage.elements.addToCart(row.itemName1);
        inventoryPage.elements.addToCart(row.itemName2);
    });
});

Then(/^the cart should contain the item (.*) with a price of (.*)$/, (itemName, itemPrice) => {
    cartPage.elements.validateCartItemName(itemName);
    cartPage.elements.validateCartItemPrice(itemPrice);
});

And(/^the user proceeds to checkout$/, () => {
    cartPage.elements.clickCheckoutBtn();
});

Then(/^the cart should contain the 2 items:$/, (dataTable) => {
    const formData: {
        itemName1: string;
        itemPrice1: string;
        itemName2: string;
        itemPrice2: string;
    }[] = dataTable.hashes();

    formData.forEach((row) => {
        cartPage.elements.validateCartItemName(row.itemName1);
        cartPage.elements.validateCartItemPrice(row.itemPrice1);
        cartPage.elements.validateCartItemName(row.itemName2);
        cartPage.elements.validateCartItemPrice(row.itemPrice2);
    });
});

When(/^the user goes to cart page$/, () => {
    cartPage.elements.goToCartPage();
});

