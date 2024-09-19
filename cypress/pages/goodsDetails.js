
export default class GoodsDetails {

    getItemName() {
        return cy.get('[data-test="inventory-item-name"]')
    }

    getItemDesc() {
        return cy.get('[data-test="inventory-item-desc"]')
    }

    getItemPrice() {
        return cy.get('[data-test="inventory-item-price"]')
    }

    getItemValues() {
        this.getItemName().invoke('text').as('name')
        this.getItemDesc().invoke('text').as('desc')
        this.getItemPrice().invoke('text').as('price')

        return cy.then(function () {
            return {
                name: this.name,
                description: this.desc,
                price: this.price,
            }
        })
    }
}
