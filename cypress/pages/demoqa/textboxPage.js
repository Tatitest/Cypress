
export default class TextboxPage {

    fillFullName(value) {
        cy.get("#userName")
            .clear()
            .type(value);

        return this;
    }

    fillEmail(value) {
        cy.get("#userEmail")
            .clear()
            .type(value);

        return this;
    }

    fillCurrentAddress(value) {
        cy.get("#currentAddress")
            .clear()
            .type(value);

        return this;
    }

    fillPermanentAddress(value) {
        cy.get("#permanentAddress")
            .clear()
            .type(value);

        return this;
    }

    getSubmitButton() {
        return cy.get('#submit')
    }

    getOutputResult() {
        return cy.get('#output')
    }

    getTextBoxValues() {
        this.getOutputResult().find('#name').invoke('text').as('name')
        this.getOutputResult().find('#email').invoke('text').as('email')
        this.getOutputResult().find('#currentAddress').invoke('text').as('currentAddress')
        this.getOutputResult().find('#permanentAddress').invoke('text').as('permanentAddress')


        return cy.then(function () {
            return {
                name: this.name.split(':')[1],
                email: this.email.split(':')[1],
                currentAddress: this.currentAddress.split(':')[1],
                permanentAddress: this.permanentAddress.split(':')[1]
            }
        })
    }
}