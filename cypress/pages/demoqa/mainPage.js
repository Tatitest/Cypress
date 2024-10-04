export default class MainPage {

    clickOnCategoryCardElements() {
        cy.get('.category-cards > :nth-child(1)')
            .click()
    }

    clickOnCategoryCardInteractions() {
        cy.get('.category-cards > :nth-child(5)')
            .click()
    }

    clickOnCategoryCardWidgets() {
        cy.get('.category-cards > :nth-child(4)')
            .click()
    }

}