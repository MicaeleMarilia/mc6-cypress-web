/// <reference types="cypress"/>

describe('Login', () =>{

    const tamanhostelas = ['samsung-s10', 'iphone-x', 'ipad-2', 'macbook-16']

    tamanhostelas.forEach(tamanho => {  

        beforeEach(() =>{

            cy.viewport(tamanho)  //Configurar o tamanho da tela
            cy.visit('/login')
        })

        it(`Login com sucesso - Tela ${tamanho}`, () => {

            cy.get('#user').type('mica@gmail.com')
            cy.get('#password').type(123456)

            cy.get('#btnLogin').click()

            cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

            cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Olá, mica@gmail.com')

        })

        it('Login email vazio', () => {

            cy.get('#password').type(123456)

            cy.get('#btnLogin').click()

            cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'E-mail inválido.')


        })

        it('Login senha vazia', () => {

            cy.get('#user').type('mica@gmail.com')

            cy.get('#btnLogin').click()

            cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'Senha inválida.')

        })

        it('Login senha invalida', () => {

            cy.get('#user').type('mica@gmail.com')
            cy.get('#password').type(123)
            cy.get('#btnLogin').click()

            cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', 'Senha inválida.')

        })
    })
})