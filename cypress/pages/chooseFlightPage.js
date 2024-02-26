///<reference types="cypress" />

export class ChooseFlightPage {
    buttons = {
        select1stFlight: () => cy.get('[color="gradient-blue"]'),
        continueWithBasicButton: () => cy.get('[data-e2e="value"]'),
        logInLaterButton: () => cy.get('[class="login-touchpoint__chevron-container"] > span', { timeout: 10000}),
        continueButton: () => cy.get('span button')
    }

    elements = {
        basicFare: () => cy.get('[data-e2e="fare-card-standard"]')
    }

    dropdowns = {
        titleDropdown: () => cy.get('.dropdown__toggle')
    }

    inputs = {
        firstNameInput: () => cy.get('[autocomplete="given-name"]'),
        lastNameInput: () => cy.get('[autocomplete="family-name"]')
    }

    click1stFlightSelect(index) {
        this.buttons.select1stFlight()
            .eq(index)
            .click()
    }

    click2ndFlightSelect() {
        this.buttons.select2ndFlight()
            .click()
    }

    selectBasicFare() {
        this.elements.basicFare()
            .click()
    }

    clickContinueWithBasicButton() {
        this.buttons.continueWithBasicButton()
            .click()
    }

    clickLogInLaterButton() {
        this.buttons.logInLaterButton()
            .click()
    }

    selectTitle() {
        this.dropdowns.titleDropdown()
            .click()
            cy.get('[data-ref*="title-item"]').each(($el) => {
                if ($el.text() == " Mr ") {
                    cy.wrap($el).click()
                }
            })
    }

    typeFirstName(firstName) {
        this.inputs.firstNameInput()
            .type(firstName)
    }

    typeLastName(lastName) {
        this.inputs.lastNameInput()
            .type(lastName)
    }

    clickContinueButton() {
        this.buttons.continueButton()
            .click()
    }
}