import BasePage from "./basePage";
import {WebElement} from "../controls/webElement";

export default class CheckoutStepOnePage extends BasePage {

    readonly elements = {
        checkoutForm: {
            inputs: {
                firstName: new WebElement('#first-name'),
                lastName: new WebElement('#last-name'),
                zipCode: new WebElement('#postal-code'),
            },
            buttons: {
                continue: new WebElement('#continue'),
                cancel: new WebElement('#cancel'),
            },
            errors: {
                errorMsg: new WebElement('[data-test="error"]')
            }
        },

        fillPersonalInfo: (dataTable: any) => {
            const formData: {
                firstName: string;
                lastName: string;
                zipCode: string;
            }[] = dataTable.hashes();

            const firstname = formData[0].firstName;
            const lastName = formData[0].lastName;
            const zipCode = formData[0].zipCode;

            this.elements.checkoutForm.inputs.firstName
                .get()
                .should('be.visible')
                .focus()
                .then(($input) => {
                    if (firstname) {
                        cy.wrap($input).type(firstname);
                    } else {
                        cy.wrap($input).clear();
                    }
                });

            this.elements.checkoutForm.inputs.lastName
                .get()
                .should('be.visible')
                .focus()
                .then(($input) => {
                    if (lastName) {
                        cy.wrap($input).type(lastName);
                    } else {
                        cy.wrap($input).clear();
                    }
                });

            this.elements.checkoutForm.inputs.zipCode
                .get()
                .should('be.visible')
                .focus()
                .then(($input) => {
                    if (zipCode) {
                        cy.wrap($input).type(zipCode);
                    } else {
                        cy.wrap($input).clear();
                    }
                });
        },

        clickOnContinueBtn: () => {
            this.elements.checkoutForm.buttons.continue
                .get()
                .click()
        },

        validateErrorMessage: (dataTable: any) => {
            const formData: {
                errorMessage: string;
            }[] = dataTable.hashes();

            this.elements.checkoutForm.errors.errorMsg
                .get()
                .should('be.visible')
                .invoke('text')
                .then((text) => {
                    expect(text).to.contains(formData[0].errorMessage)
                })
            cy.reload();
        }
    }
}