///<reference types="cypress" />

export class SeatsPage {
    elements = {
        flightSeat: (index) => cy.get(`button[id="seat-${index}"]`)
    }

    buttons = {
        nextFlightButton: () => cy.get('[color="gradient-yellow"]'),
        pickTheseSeatsButton: () => cy.get('.body-xl-lg').eq(1),
        noThanksButton: () => cy.get('[data-ref="enhanced-takeover-beta-desktop__dismiss-cta"]', { timeout:10000 }),
        addRecommendedSeatsButton: () => cy.get('[data-ref="seats-action__button-next"]'),
        addFastTrack: () => cy.get('[color="gradient-yellow"]').eq(1)
    }

    selectFlightSeat(number) {
        this.elements.flightSeat(number)
            .click()
    }

    clickNextFlightButton() {
        this.buttons.nextFlightButton()
            .click()
    }

    clickPickTheseSeatsButton() {
        this.buttons.pickTheseSeatsButton()
            .click()
    }

    clickNoThanksButton() {
        this.buttons.noThanksButton()
            .click()
    }

    clickAddRecommendedSeatsButton() {
        this.buttons.addRecommendedSeatsButton()
            .click()
    }

    clickAddFastTrackButton() {
        this.buttons.addFastTrack()
            .click()
    }
}