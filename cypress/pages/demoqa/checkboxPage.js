export default class CheckboxPage {

    getUncheckedCheckbox() {
        return cy.get('.rct-icon-uncheck')
    }

    getCheckedCheckbox() {
        return cy.get('.rct-icon-check')
    }

    getExpandAllBth() {
        return cy.get('.rct-option-expand-all')
    }

    getCollapseAllBth() {
        return cy.get('.rct-option-collapse-all')
    }
}