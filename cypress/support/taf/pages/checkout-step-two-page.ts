import BasePage from "./basePage";
import {WebElement} from "../controls/webElement";

export default class CheckoutStepTwoPage extends BasePage {

    readonly elements = {
        cartList: {
            links: {
                cartItems: new WebElement('.cart_item')
            },
            labels: {
                itemTotal: new WebElement('.summary_subtotal_label'),
                tax: new WebElement('.summary_tax_label'),
                total: new WebElement('.summary_info_label.summary_total_label'),
            },
            buttons: {
                finish: new WebElement('#finish'),
                cancel: new WebElement('#cancel'),
            }
        },

        checkItemQty: (qty: number) => {
            this.elements.cartList.links.cartItems
                .get()
                .should('have.length', qty);
        },

        verifyPaymentInformation: (dataTable: any) => {
            const formData: {
                itemTotal: string;
                taxAmount: string;
                total: string;
            }[] = dataTable.hashes();

            this.elements.cartList.labels.itemTotal
                .get()
                .should('contain.text', formData[0].itemTotal);
            this.elements.cartList.labels.tax
                .get()
                .should('contain.text', formData[0].taxAmount);
            this.elements.cartList.labels.total
                .get()
                .should('contain.text', formData[0].total);
        },

        clickFinishBtn: () => {
            this.elements.cartList.buttons.finish
                .get()
                .click()
        }
    }
}