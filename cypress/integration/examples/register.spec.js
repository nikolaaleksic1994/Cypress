const locators = require("../../fixtures/locator.json")
const faker = require('faker');
let userData = {
    randomName: faker.name.findName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}

describe ('register spec', () => {
    beforeEach(() => {
        cy.visit(locators.registerPage.register)
        cy.get(locators.registerPage.registerButton).click()
    })
        it('positive', () => {
        cy.get(locators.registerPage.registerButton).click()
        cy.get(locators.registerPage.firstName).type('Nidzo')
        cy.get(locators.registerPage.lastName).type('Nidzovic')
        cy.get(locators.registerPage.registerEmail).type('nidza1994@gmail.com')
        cy.get(locators.registerPage.registerPassword).type('nidza1994')
        cy.get(locators.registerPage.confirmPassword).type('nidza1994')
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submitButton).click()
        })

    
    it('negative', () =>{
        cy.get(locators.registerPage.registerButton).click()
        cy.get(locators.registerPage.firstName).type(userData.randomName())
        cy.get(locators.registerPage.lastName).type(userData.randomLastName())
        cy.get(locators.registerPage.registerEmail).type(userData.randomEmail())
        cy.get(locators.registerPage.registerPassword).type(userData.randomPassword())
        cy.get(locators.registerPage.confirmPassword).type(userData.randomPassword())
        cy.get(locators.registerPage.terms).check()
        cy.get(locators.registerPage.submitButton).click()
    })
})

    


