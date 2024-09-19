export const title = {
    checkoutTitle: "Checkout: Overview"
}

export default class CheckoutPage {
    fillUserFirstName(value) {
        cy.get('[data-test="firstName"]')
        .clear()
        .type(value)
        return this;
    }

    fillUserLastName(value) {
        cy.get('[data-test="lastName"]')
        .clear()
        .type(value)
        return this;
    }

    fillZipCode(value) {
        cy.get('[data-test="postalCode"]')
        .clear()
        .type(value)
        return this;
    }

    continueBtn() {
        return cy.get('[data-test="continue"]')
    }

    getTitleText() {
        return cy.get('[data-test="title"]')
    }
}