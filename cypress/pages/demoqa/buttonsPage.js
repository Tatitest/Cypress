export const text = {
    doubleClickMsgText: "You have done a double click"
}

export default class ButtonsPage {

    getDoubleClick() {
        return cy.get('#doubleClickBtn').dblclick({ force: true })
    }

    doubleClickMsg() {
        return cy.get('#doubleClickMessage')
    }
}