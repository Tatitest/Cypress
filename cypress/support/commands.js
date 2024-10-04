// import { loginElements as login } from '../pages/loginPage';
import SignInPage from '../pages/SignInPage';
import "@4tw/cypress-drag-drop"
import 'cypress-iframe';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, password) => {
    cy.visit("", {});
    new SignInPage()
        .fillEmail(email)
        .fillPassword(password)
        .submit();
})

Cypress.Commands.add('clickOnListElement', (value) => {
    cy.contains(value)
        .parent()
        .click()
})

Cypress.Commands.add('scrollToElement', (value) => {
    cy.contains(value).scrollIntoView()
        .should('be.visible')
})

Cypress.Commands.add('dragAndDropElements', (val1, val2) => {
    cy.get(val1).drag(val2, {force: true})
    .then((success) => {
        assert.isTrue(success)
    })
})

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
// })