/// <reference types="cypress"/>
import { faker } from "@faker-js/faker"


describe('Checkout', () => {

    let user
    let password
    let email

    beforeEach(() =>{
        
    
        cy.visit('/register') //URL configurada no cypress.config

        user = faker.person.firstName()
        password = faker.internet.password({length: 6})
        email = faker.internet.email()

    })
    
    it('Fazer comprar com um novo usuario', () => {
        cy.cadastrarUsuario(user, email, password)
    })
})