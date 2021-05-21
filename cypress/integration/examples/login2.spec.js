import {authLogin} from '../../pageObjects/loginPage.js'


describe('login spec', () =>{
    beforeEach(() => {
        cy.visit ('')
        authLogin.clickLoginButton()
    })
        it('login with credentials',() =>{
        authLogin.login('zoki19994@gmail.com', 'nidza1994')
        
    })

})

