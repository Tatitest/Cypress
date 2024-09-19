export const items = {
    itemNameText: "Sauce Labs Onesie",
    bikeLightNameText: "Sauce Labs Bike Light",
    itemName: '[data-test="inventory-item-name"]',
    bikeLightName: "#add-to-cart-sauce-labs-bike-light",
    onesie: "#add-to-cart-sauce-labs-onesie",
    shoppingCart: '[data-test="shopping-cart-link"]'
}

export default class GoodsList {

    getItemName() {
        return cy.get(items.itemName)
    }

    getItemDesc(itemName) {
        return this.getItemName().contains(itemName)
            .parent().siblings('div')
    }

    getItemPrice(itemName) {
        return this.getItemName().contains(itemName)
            .parent().parent().siblings('div').children('div')
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

    addItemToTheCart(itemName) {
        return cy.get(itemName)
    }

    getItemInTheCart() {
        return cy.get('[data-test="shopping-cart-badge"]')

    }

    shoppingCart() {
        return cy.get(items.shoppingCart)
    }
}