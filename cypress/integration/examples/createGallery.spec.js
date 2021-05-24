const locators=require('../../fixtures/locator.json')
describe('create gallery test', () => {
    before(() => {
cy.loginTroughBackhend('zoki19994@gmail.com','nidza1994')

    })

    it('visit gallery', () => {
        cy.visit('')
        cy.get(locators.navigation.loginButton).should('not.exist')
    })
})