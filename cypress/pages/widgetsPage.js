export default class WidgetsPage {

    selectDropdownElement(value) {
        return cy.get('#oldSelectMenu').select(value)
    }

    mouseoverDropdownElement() {
        cy.get('#nav > :nth-child(2) > :nth-child(1)')
            .parent()
            .children('ul')
            .invoke('show')

        cy.get('[style="display: block;"]')
            .contains('li', 'SUB SUB LIST »').trigger('mouseover')
        cy.contains('ul', 'Sub Sub Item 1')
            .click({ force: true })
    }

}