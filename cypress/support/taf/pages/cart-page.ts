import {WebElement} from "../controls/webElement";
import BasePage from "./basePage";

export default class CartPage extends BasePage {

    readonly elements = {
        myCart: {
            items: {
                itemNames: new WebElement('.inventory_item_name'),
                itemPrices: new WebElement('.inventory_item_price'),
            },
            buttons: {
                removeFromCart: new WebElement('[data-test^=remove]'),
                shoppingCartBadge: new WebElement('.shopping_cart_badge'),
                checkout: new WebElement('[data-test="checkout"]'),
            }
        },

        goToCartPage: () => {
            cy.visit('/cart.html');
            this.validateTitle("Your Cart");
        },

        validateCartItemName: (itemName: string) => {
            this.elements.myCart.items.itemNames
                .get()
                .should('contain.text', itemName);
        },

        validateCartItemPrice: (itemPrice: string) => {
            this.elements.myCart.items.itemPrices
                .get()
                .should('contain.text', itemPrice);
        },

        clickCheckoutBtn: () => {
            this.elements.myCart.buttons.checkout
                .get()
                .click()
        }
    }
}

