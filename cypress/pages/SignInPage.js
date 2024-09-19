
export default class SignInPage {
    visit() {
        cy.visit("", {});
    }

    fillEmail(value) {
        cy.get("#user-name")
        .clear()
        .type(value);

        return this;
    }

    fillPassword(value) {
        cy.get("#password")
        .clear()
        .type(value);

        return this;
    }

    submit() {
        cy.get("#login-button")
        .click();
    }
}
