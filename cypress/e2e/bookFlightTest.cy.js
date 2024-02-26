///<reference types="cypress"/>

import { MainPage } from "../pages/mainPage";
import { ChooseFlightPage } from "../pages/chooseFlightPage";
import { SeatsPage } from "../pages/seatsPage";
import { BagsPage } from "../pages/bagsPage";
import { ExtrasPage } from "../pages/extrasPage";

const mainPage = new MainPage();
const chooseFlightPage = new ChooseFlightPage();
const seatsPage = new SeatsPage();
const bagsPage = new BagsPage();
const extrasPage = new ExtrasPage();

const testData = {
    departureLocalization: "Wroclaw",
    destinationLocalization: "Paris",
    airport: "BVA",
    departDate: "2024-03-29",
    returnDate: "2024-03-31",
    title: ' Mr ',
    firstName: 'Bartlomiej',
    lastName: 'Kornak',
    seatNumber: '32B'
}

describe('Book flight test suite', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.intercept('https://bam.nr-data.net/1/**').as('pageLoaded')
        cy.visit('/')
        cy.wait('@pageLoaded')
        mainPage.acceptCookies()
    })
    it('Verify login requirement during booking process on flight Wroclaw-Paris', () => {
        mainPage.typeDeparture(testData.departureLocalization);
        mainPage.selectAirportFrom("WRO")
        mainPage.typeDestination(testData.destinationLocalization);
        mainPage.selectAirport("BVA")
        mainPage.selectDepartReturnDate(testData.departDate)
        mainPage.selectDepartReturnDate(testData.returnDate)
        mainPage.clickSearchButton();
        chooseFlightPage.click1stFlightSelect(0)
        chooseFlightPage.click1stFlightSelect(0)
        chooseFlightPage.selectBasicFare();
        chooseFlightPage.clickContinueWithBasicButton()
        chooseFlightPage.clickLogInLaterButton()
        chooseFlightPage.selectTitle(testData.title)
        chooseFlightPage.typeFirstName(testData.firstName)
        chooseFlightPage.typeLastName(testData.lastName)
        chooseFlightPage.clickContinueButton()
        seatsPage.clickAddRecommendedSeatsButton()
        seatsPage.clickAddFastTrackButton()
        bagsPage.elements.header().should('be.visible')
        bagsPage.radiobuttons.oneSmallBagOnly().should('be.visible')
        bagsPage.select1SmallBag()
        bagsPage.clickAdd20kgBagButton()
        bagsPage.select1SmallBag()
        bagsPage.clickContinueButton()
        cy.url().should('contain', '/extras')
        extrasPage.clickContinueButton()
        cy.url().should('contain', '/extras/transport')
        extrasPage.clickContinueButton()
        extrasPage.elements.logInPopUp()
            .should('be.visible')
            .and('contain', 'Log in')
        cy.screenshot()
    })
});
