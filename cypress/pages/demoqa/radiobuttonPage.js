export const text = {
    msgText: "You have selected "
}

export default class RadiobuttonPage {

    getRadioButtonImpressive() {
        return cy.get('#impressiveRadio')
    }

    getRadioButtonYes() {
        return cy.get('#yesRadio')
    }

    getRadioButtonSuccessMsg() {
        return cy.get('.text-success')
    }

    getRadioButtonMsg() {
        return cy.get('.text-center').parent().find('p')
    }
}