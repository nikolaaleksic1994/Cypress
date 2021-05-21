import {createGallery} from '../../pageObjects/createGallery.js'
import {authLogin} from '../../pageObjects/loginPage.js'

describe('login spec', () =>{
    it('login',() => {
        cy.visit('')
        authLogin.clickLoginButton()
    })
        it('login with credentials',() =>{
        authLogin.login('zoki19994@gmail.com', 'nidza1994')
        
    })

})


describe('create gallery', () =>{

        
        it('create new gallery',() =>{
            createGallery.clickCreateButton()
        createGallery.create('yolo', 'yolooo', 'https://i.redd.it/tdtxbzdut9i21.jpg')
        
    })

})