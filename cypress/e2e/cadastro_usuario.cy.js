/// <reference types="cypress"/>
import { faker } from "@faker-js/faker"

const auth = require('../fixtures/auth.json')

describe('Cadastro do usuario', () =>{

    let user
    let password
    let email

    beforeEach(() =>{
        
    
        cy.visit('/register') //URL configurada no cypress.config

        user = faker.person.firstName()
        password = faker.internet.password({length: 6})
        email = faker.internet.email()

    })

    it('Cadastro com sucesso', ()=>{

        cy.get('#user').type(user)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#btnRegister').click()

        //Validar
        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')
            .should('be.visible')

        cy.get('#swal2-html-container')
            .should('have.text', `Bem-vindo ${user}`)
            .should('be.visible')
    })

    it('Cadastro nome vazio', ()=>{
        
        cy.get('#email').type('mica@gmail.com')
        cy.get('#password').type(auth.password) //Utilizando de um arquivo json em fixtures
        cy.get('#btnRegister').click()

        //Validar
        cy.get('.errorLabel')
            .should('have.text', 'O campo nome deve ser prenchido')
            .should('be.visible')

    })

    it('Cadastro email vazio', ()=>{

        cy.get('#user').type('Micaele Marilia')
        cy.get('#password').type(123456)
        cy.get('#btnRegister').click()

        //Validar
        cy.get('.errorLabel')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
            .should('be.visible')
        
    })

    it('Cadastro senha vazia', ()=>{

        cy.get('#user').type('Micaele Marilia')
        cy.get('#email').type('mica@gmail.com')
        cy.get('#btnRegister').click()

        //Validar
        cy.get('.errorLabel')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
            .should('be.visible')
       
    })

    it('Cadastro email invalido', ()=>{

        cy.get('#user').type('Micaele Marilia')
        cy.get('#email').type('emailinvalido@')
        cy.get('#password').type(123456)
        cy.get('#btnRegister').click()

        //Validar
        cy.get('.errorLabel')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
            .should('be.visible')

    })

    it('Cadastro senha invalida', ()=>{

        cy.get('#user').type('Micaele Marilia')
        cy.get('#email').type('mica@gmail.com')
        cy.get('#password').type(password = faker.internet.password({length: 3}))
        cy.get('#btnRegister').click()

        //Validar
        cy.get('.errorLabel')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
            .should('be.visible')

    })

})