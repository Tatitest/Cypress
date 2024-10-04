export const elements = {
    elementToDrop: '#draggable',
    placeToDrop: '#droppable'
}

export default class DroppablePage {

    isDroppablePageVisible() {
        cy.get('#droppableContainer')
            .should('be.visible')
    }

}