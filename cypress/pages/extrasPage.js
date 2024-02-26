///<reference types="cypress" />

export class ExtrasPage {
    buttons = {
        continueButton: () => cy.get('[color="gradient-yellow"]')
    }

    elements = {
        logInPopUp: () => cy.get('[class="auth-popup"]')
    }

    clickContinueButton() {
        this.buttons.continueButton()
            .click({ force:true })
    }
}


