
export default class WebTablesPage {

    getAddBtn() {
        return cy.get('#addNewRecordButton')
    }

    getRegistrationForm() {
        return cy.get('.modal-content').should('be.visible')
    }

    setFirstName(value) {
        cy.get('#firstName')
            .clear()
            .type(value)

        return this;
    }

    setLastName(value) {
        cy.get('#lastName')
            .clear()
            .type(value)

        return this;
    }

    setEmail(value) {
        cy.get('#userEmail')
            .clear()
            .type(value)

        return this;
    }

    setAge(value) {
        cy.get('#age')
            .clear()
            .type(value)

        return this;
    }

    setSalary(value) {
        cy.get('#salary')
            .clear()
            .type(value)

        return this;
    }

    setDepartment(value) {
        cy.get('#department')
            .clear()
            .type(value)

        return this;
    }

    getSubmit() {
        return cy.get('#submit')
    }

    getSearchBox() {
        return cy.get('#searchBox')
    }

    getTableLine() {
        return cy.get('[role="row"]')[1]
    }

    getUserRow(value) {
        return cy.get('.rt-td').contains(value)
    }

    searchUser(value) {
        this.getUserRow(value)
            .should('have.text', value)

        return this;
    }
}