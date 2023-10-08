import BasePage from "./basePage";
import {WebElement} from "../controls/webElement";

export default class CheckoutCompletePage extends BasePage {

    readonly elements = {
        checkoutForm: {
            buttons: {
                backToHome: new WebElement('[id="back-to-products"]')
            }
        },

    }
}