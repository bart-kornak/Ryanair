///<reference types="cypress" />

export class BagsPage {
    radiobuttons = {
        oneSmallBagOnly: () => cy.get('[class="ry-radio-circle-button__label"]', {timeout: 10000}).eq(0)
    }

    buttons = {
        add20kgBagButton: () => cy.get('[data-ref="counter.counter__increment"]'),
        continueButton: () => cy.get('[data-ref="bags-continue-button"]')
    }

    elements = {
        header: () => cy.get('#bag-header-1')
    }

    select1SmallBag() {
        this.radiobuttons.oneSmallBagOnly()
            .click()
    }

    clickAdd20kgBagButton() {
        this.buttons.add20kgBagButton()
            .click()
    }

    clickContinueButton() {
        this.buttons.continueButton()
            .click({ force:true })
    }
}