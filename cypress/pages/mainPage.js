///<reference types="cypress" />

export class MainPage {
    inputs = {
        departureInput: () => cy.get('#input-button__departure'),
        destinationInput: () => cy.get('#input-button__destination')
    }

    buttons = {
        searchButton: () => cy.contains('Search'),
        cookieAccept: () => cy.get('[data-ref="cookie.accept-all"]')
    }

    elements = {
        pickAnAirportFrom: (airportCode) => cy.get(`[data-id="${airportCode}"]`),
        pickAnAirport: (airportCode) => cy.get(`[data-id="${airportCode}"]`),
        departReturnDate: (date) => cy.get(`[data-id="${date}"]`)
    }

    dropdowns = {
        departDate: () => cy.get('[data-ref="input-button__dates-from"]'),
        //returnDate: () => cy.get("[data-ref="input-button__display-value"]").eq(3)
    }

    typeDeparture(departureLocalization) {
        this.inputs.departureInput()
            .clear()
            .type(departureLocalization)
    }

    typeDestination(destinationLocalization) {
        this.inputs.destinationInput()
            .type(destinationLocalization)
    }

    clickSearchButton() {
        this.buttons.searchButton()
            .click()
    }

    selectAirportFrom(airportCode) {
        this.elements.pickAnAirportFrom(airportCode)
            .click({force: true})
    }

    selectAirport(airportCode) {
        this.elements.pickAnAirport(airportCode)
            .click({force: true})
    }

    acceptCookies() {
        this.buttons.cookieAccept()
            .click()
    }

    selectDepartReturnDate(date) {
        this.elements.departReturnDate(date)
            .click()
    }
}