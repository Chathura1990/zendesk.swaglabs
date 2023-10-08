export default class BasePage {

    validateUrl(pageName: string) {
        cy.url().should('include', pageName);
    }

    validateTitle(pageTitle: string) {
        cy.title().should('eq', pageTitle);
    }

    getUrl() {
        return cy.url();
    }

    validateMessage(message: string) {
        cy.contains(message).should('be.visible');
    }
}