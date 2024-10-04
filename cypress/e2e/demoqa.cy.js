import MainPage from "../pages/demoqa/mainPage";
import ButtonsPage from "../pages/demoqa/buttonsPage";
import { text as msgText } from "../pages/demoqa/buttonsPage";
import WidgetsPage from "../pages/widgetsPage";
import DroppablePage from "../pages/demoqa/droppablePage";
import { elements as dragAndDropElements } from "../pages/demoqa/droppablePage";
import DatepickerPage from "../pages/demoqa/datepickerPage";
import CheckboxPage from "../pages/demoqa/checkboxPage";
import TextboxPage from "../pages/demoqa/textboxPage";
import RadiobuttonPage from "../pages/demoqa/radiobuttonPage";
import { text as radioButtonMsg } from "../pages/demoqa/radiobuttonPage"
import WebTablesPage from "../pages/demoqa/WebTablesPage";
import "../support/commands";

describe("Tests for the sign in page", () => {

    beforeEach("Open page", () => {
        cy.visit("", {});
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    });
    const mainPage = new MainPage()
    const buttonsPage = new ButtonsPage()
    const widgetsPage = new WidgetsPage()
    const droppablePage = new DroppablePage()
    const datepickerPage = new DatepickerPage()
    const checkboxPage = new CheckboxPage()
    const textboxPage = new TextboxPage()
    const radiobuttonPage = new RadiobuttonPage()
    const webTablesPage = new WebTablesPage()

    it("DoubleClick", {retries:2}, () => {
        mainPage.clickOnCategoryCardElements()
        cy.clickOnListElement('Buttons')
        buttonsPage.getDoubleClick()
        buttonsPage.doubleClickMsg().invoke('text').then(msg => {
            cy.log("message " + msg)
            expect(msg).to.deep.equal(msgText.doubleClickMsgText)
        })

    })

    it("Select", () => {
        mainPage.clickOnCategoryCardWidgets()
        cy.clickOnListElement('Select Menu')
        widgetsPage.selectDropdownElement('5')
            .invoke('val')
            .should('deep.equal', '5')
    })

    it("Scroll", () => {
        mainPage.clickOnCategoryCardElements()
        cy.scrollToElement('Dynamic Properties')
    })

    it("DragAndDrop", () => {
        mainPage.clickOnCategoryCardInteractions()
        cy.clickOnListElement('Droppable')
        droppablePage.isDroppablePageVisible()
        cy.dragAndDropElements(dragAndDropElements.elementToDrop, dragAndDropElements.placeToDrop)
    })

    it("Mouseover", () => {
        mainPage.clickOnCategoryCardWidgets()
        cy.clickOnListElement('Menu')
        widgetsPage.mouseoverDropdownElement()

    })

    it("Date picker", () => {
        mainPage.clickOnCategoryCardWidgets()
        cy.clickOnListElement('Date Picker')
        datepickerPage.isDatePickerPageVisible()
        datepickerPage.setDate("10/02/2024")

    })

    it("Checkbox", () => {
        mainPage.clickOnCategoryCardElements()
        cy.clickOnListElement('Check Box')
        checkboxPage.getUncheckedCheckbox().click()
        checkboxPage.getCheckedCheckbox().should('be.visible')
        checkboxPage.getExpandAllBth().click()
        checkboxPage.getCollapseAllBth().click()
    })

    it("Text box", () => {
        mainPage.clickOnCategoryCardElements()
        cy.clickOnListElement('Text Box')
        cy.fixture("textBox").then((data) => {
            textboxPage
                .fillFullName(data.name)
                .fillEmail(data.email)
                .fillCurrentAddress(data.currentAddress)
                .fillPermanentAddress(data.permanentAddress)
                .getSubmitButton().click()

            textboxPage.getTextBoxValues().then(text => {
                expect(text.toString()).to.deep.equal(data.toString())
            })
        })
    })

    it("Radio Button", () => {
        mainPage.clickOnCategoryCardElements()
        cy.clickOnListElement('Radio Button')
        radiobuttonPage.getRadioButtonYes().click({ force: true })
        radiobuttonPage.getRadioButtonSuccessMsg().then(option => {
            radiobuttonPage.getRadioButtonMsg().invoke('text').should('eq', radioButtonMsg.msgText + option.text())

        })
    })

    it("Web Tables", () => {
        mainPage.clickOnCategoryCardElements()
        cy.clickOnListElement('Web Tables')
        webTablesPage.getAddBtn().click()
        webTablesPage.getRegistrationForm().should('be.visible')
        cy.fixture("registrationform").then((registration) => {
            webTablesPage
                .setFirstName(registration.name)
                .setLastName(registration.lastName)
                .setEmail(registration.email)
                .setAge(registration.age)
                .setSalary(registration.salary)
                .setDepartment(registration.department)
                .getSubmit().click()

            webTablesPage.getSearchBox()
                .clear()
                .type(registration.name)
            webTablesPage.searchUser(registration.name)
        })
    })
})
