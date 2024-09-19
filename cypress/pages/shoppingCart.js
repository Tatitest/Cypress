export const items = {
    itemName: '[data-test="inventory-item-name"]',
    itemNameText: "Sauce Labs Onesie",
    bikeLightNameText: "Sauce Labs Bike Light",
    bikeLightName: "#add-to-cart-sauce-labs-bike-light",
    onesie: "#add-to-cart-sauce-labs-onesie",
}

export default class ShoppingCart {
    getListOfGoods() {
        return cy.get('[data-test="inventory-item-name"]')
    }

    getItemName() {
        return cy.get(items.itemName)
    }

    getItemDesc(itemName) {
        return this.getItemName().contains(itemName)
            .parent().siblings('div')
    }

    getItemPrice(itemName) {
        return this.getItemName().contains(itemName)
            .parent().siblings('.item_pricebar').children('div')
    }

    getItemValues(nameText) {
        this.getItemName().contains(nameText).invoke('text').as('name')
        this.getItemDesc(nameText).invoke('text').as('desc')
        this.getItemPrice(nameText).invoke('text').as('price')

        return cy.then(function () {
            return {
                name: this.name,
                description: this.desc,
                price: this.price,
            }
        })
    }

    checkoutBtn() {
        return cy.get('[data-test="checkout"]')
    }
}