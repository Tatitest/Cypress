import { items as goodsText } from '../pages/goodsList';
import GoodsList from '../pages/goodsList';
import GoodsDetails from '../pages/goodsDetails';
import ShoppingCart from '../pages/shoppingCart';
import { items as itemValues } from '../pages/shoppingCart';
import CheckoutPage, { title } from '../pages/checkoutPage';

import "../support/commands";

describe("Tests for the sign in page", () => {
  beforeEach("Open page", () => {
    cy.login(Cypress.env("email"), Cypress.env("password"))
  });
  const goods = new GoodsList()
  const cart = new ShoppingCart()
  const goodsDetails = new GoodsDetails()
  const checkout = new CheckoutPage()


  it("Comparison of item elements from product details page and shopping list page", () => {
    goods.getItemValues(goodsText.itemNameText).then((itemBeforeClick) => {
      goods.getItemName().contains(goodsText.itemNameText).click()
      goodsDetails.getItemValues().then((itemAfterClick) => {
        expect(itemBeforeClick.toString()).to.deep.equal(itemAfterClick.toString())

      })
    }
    )
  })

  it("Add items to the cart", () => {
    goods.getItemValues(itemValues.itemNameText).then((onesieObj) => {
      goods.getItemValues(itemValues.bikeLightNameText).then((bikeLightObj) => {
        goods.addItemToTheCart(itemValues.bikeLightName).click()
        goods.addItemToTheCart(itemValues.onesie).click()
        goods.shoppingCart().click()
        cart.getListOfGoods().should('have.length', 2)
        cart.getItemValues(itemValues.itemNameText).then((addedOnesieObj) => {
          cart.getItemValues(itemValues.bikeLightNameText).then((addedBikeLightObj) => {

            expect(onesieObj.toString()).to.deep.equal(addedOnesieObj.toString())
            expect(bikeLightObj.toString()).to.deep.equal(addedBikeLightObj.toString())
          })
        })
      })
    }
    )

    cart.checkoutBtn().click()
    cy.fixture("customerInfo").then((data) => {
      checkout
      .fillUserFirstName(data.fName)
      .fillUserLastName(data.lName)
      .fillZipCode(data.zipCode)
      .continueBtn().click()
    })
    checkout.getTitleText().invoke('text').should('equal', title.checkoutTitle)
  })
})



