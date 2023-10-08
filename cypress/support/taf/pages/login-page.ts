import {WebElement} from "../controls/webElement";
import BasePage from "./basePage";

export default class LoginPage extends BasePage {

    readonly elements = {
        loginForm: {
            inputs: {
                usernames: new WebElement('[id="user-name"]'),
                passwords: new WebElement('[id="password"]')
            },
            buttons: {
                login: new WebElement('[id="login-button"]')
            }
        },

        goToLoginPage: () => {
            cy.visit('/');
            this.validateTitle("Swag Labs");
        },

        fillLoginForm: (userType: string) => {
            let usernameField = this.elements.loginForm.inputs.usernames;
            let passwordField = this.elements.loginForm.inputs.passwords;
            cy.fixture('users').then((userData) => {
                if (userType != "") {
                    usernameField
                        .get()
                        .should('be.visible')
                        .focus()
                        .type(userData[userType].username);
                    passwordField
                        .get()
                        .should('be.visible')
                        .focus()
                        .type(userData[userType].password);
                } else {
                    usernameField.get().clear();
                    passwordField.get().clear();
                }
            });
        },

        clickLoginButton() {
            this.loginForm.buttons.login.get().should('be.visible').click();
        },

        login(userName: string) {
            this.goToLoginPage();
            this.fillLoginForm(userName);
            this.clickLoginButton();
        }

    };
}