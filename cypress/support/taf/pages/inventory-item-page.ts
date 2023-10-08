import {BasePage} from "./index";
import {WebElement} from "../controls/webElement";

export default class InventoryItemPage extends BasePage {

    readonly elements = {
        catalog: {
            links: {
                itemName: new WebElement('.inventory_details_name'),
                itemDescription: new WebElement('.inventory_details_desc'),
                itemPrice: new WebElement('.inventory_details_price'),
            },
            buttons: {
                backToProducts: new WebElement('[id="back-to-products"]')
            }
        },

        checkItemName: (itemName: string) => {
            this.elements.catalog.links.itemName
                .get()
                .invoke('text')
                .should('eq', itemName)
        },

        checkItemPrice: (itemName: string) => {
            cy.fixture('items').then((itemInfo) => {
                this.elements.catalog.links.itemPrice
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

        validateItemIdWithUrl: (expectedPage: string, itemId: any) => {
            this.validateUrl(expectedPage + "?id=" + itemId)
        },

        clickBackToProductsBtn: () => {
            this.elements.catalog.buttons.backToProducts.get().click()
        }
    }
}