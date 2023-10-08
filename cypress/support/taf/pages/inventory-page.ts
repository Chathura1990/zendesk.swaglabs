import {WebElement} from "../controls/webElement";
import {BasePage} from "./index";

export default class InventoryPage extends BasePage {

    readonly elements = {
        catalog: {
            links: {
                item: new WebElement('.inventory_item'),
                itemNames: new WebElement('.inventory_item_name'),
                itemDescription: new WebElement('.inventory_item_desc'),
                itemPrices: new WebElement('.inventory_item_price'),
            },
            buttons: {
                addToCart: new WebElement('[data-test^=add-to-cart]'),
                shoppingCartIcon: new WebElement('.shopping_cart_link'),
                removeFromCart: new WebElement('[data-test^=remove]'),
                shoppingCartBadge: new WebElement('.shopping_cart_badge'),
            }
        },

        checkItemName: (itemName: string) => {
            this.elements.catalog.links.itemNames
                .get()
                .invoke('text')
                .should('eq', itemName)
        },

        checkItemPrice: (itemName: string) => {
            cy.fixture('items').then((itemInfo) => {
                this.elements.catalog.links.itemPrices
                    .get()
                    .invoke('text')
                    .should('eq', itemInfo[itemName].price)
            });
        },

        checkItemDescription: (itemName: string) => {
            cy.fixture('items').then((itemInfo) => {
                this.elements.catalog.links.itemDescription
                    .get()
                    .invoke('text')
                    .should('eq', itemInfo[itemName].description)
            });
        },

        validateItemInfo: (itemName: string) => {
            this.elements.checkItemName(itemName)
            this.elements.checkItemPrice(itemName)
            this.elements.checkItemDescription(itemName)
        },

        clickOnItem: (itemName: string) => {
            cy.contains(this.elements.catalog.links.itemNames.locator, itemName)
                .contains(itemName)
                .click()
        },

        addToCart: (itemName: string) => {
            cy.contains(this.elements.catalog.links.item.locator, itemName)
                .contains('Add to cart')
                .click()
        },

        clickOnCartIcon: (itemNumber: number) => {
            if (itemNumber != 0) {
                this.elements.catalog.buttons.shoppingCartBadge
                    .get()
                    .should('contain', itemNumber)
                    .click()
            } else {
                this.elements.catalog.buttons.shoppingCartIcon
                    .get()
                    .click()
            }
        }
    };
}