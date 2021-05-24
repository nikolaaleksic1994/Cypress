const locators = require("../../fixtures/locator.json")
const faker = require('faker');
let userData = {
    randomName: faker.name.findName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}


describe('login spec', () =>{
    beforeEach(() => {
        cy.visit ('')
        cy.get("a[href='/login']").click()
        cy.url().should('include','/login')
        cy.get(locators.loginPage.title).shoud('have.text', 'Please login')
    
    
    })
        it('positive',() =>{
        cy.get(locators.navigation.loginButton).click()
        cy.get(locators.loginPage.email).type("zoki19994@gmail.com")
        cy.get(locators.loginPage.password).type("nidza1994")
        cy.get(locators.loginPage.submitBtn).click()
        cy.get(locators.navigation.logoutButton).click()
        
    })

})

describe('login spec - negative', () =>{
    it('negative', () => {

        cy.visit('')
        cy.get('a[class="nav-link nav-buttons"]').eq(0).click()
        cy.get('input[id="email"]').type(userData.randomEmail())
        cy.get('input[id="password"]').type(userData.randomPassword())
        cy.get(locators.loginPage.submitBtn).click()
        cy.get(locators.navigation.logoutButton).click()
    })

})

