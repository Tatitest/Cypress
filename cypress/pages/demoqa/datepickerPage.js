import 'cypress-iframe'

export default class DatepickerPage {

    isDatePickerPageVisible() {
        cy.get('#datePickerContainer')
            .should('be.visible')
    }

    setDate(date) {
        cy.get('#datePickerMonthYearInput').clear().type(date)
        cy.get('#datePickerMonthYearInput').click()
    }
}