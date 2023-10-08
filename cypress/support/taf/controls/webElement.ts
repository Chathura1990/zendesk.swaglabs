import 'cypress-xpath';

export class WebElement {
    locator: string;
    timeoutValue = 10000;

    constructor(locator: string) {
        this.locator = locator;
    }

    get() {
        if (this.locator.includes('//')) {
            return cy.xpath(this.locator, {timeout: this.timeoutValue});
        } else if (this.locator.includes('.//')) {
            return cy.xpath(this.locator, {timeout: this.timeoutValue});
        }
        return cy.get(this.locator, {timeout: this.timeoutValue});
    }
}