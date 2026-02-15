/// <reference types="cypress"/>

Cypress.Commands.add('preencherUsuario', (user) => {
    cy.get('#user').type(user)
})

Cypress.Commands.add('preencherEmail', (email) => {
    cy.get('#email').type(email)
})

Cypress.Commands.add('preencherSenha', (password) => {
    cy.get('#password').type(password)
})

Cypress.Commands.add('clicarCadastrar', () => {
    cy.get('#btnRegister').click()
})

Cypress.Commands.add('validarCadastro', (user) => {
    cy.get('#swal2-title')
        .should('have.text', 'Cadastro realizado!')
        .should('be.visible')

    cy.get('#swal2-html-container')
        .should('have.text', `Bem-vindo ${user}`)
        .should('be.visible')
})

Cypress.Commands.add('cadastrarUsuario', (user, email, password) => {
    cy.preencherUsuario(user)
    cy.preencherEmail(email)
    cy.preencherSenha(password)
    cy.clicarCadastrar()

    cy.validarCadastro(user)
})

Cypress.Commands.add('validarUsuario', () => {
    cy.get('.errorLabel')
        .should('have.text', 'O campo nome deve ser prenchido')
        .should('be.visible')
})

Cypress.Commands.add('validarEmailCad', () => {
    cy.get('.errorLabel')
        .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
        .should('be.visible')
})

Cypress.Commands.add('validarSenhaCad', () => {
    cy.get('.errorLabel')
        .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
        .should('be.visible')
})

Cypress.Commands.add('validarEmailInvalidoCad', (user, password) => {
    cy.preencherUsuario(user)
    cy.preencherEmail('emailinvalido@')
    cy.preencherSenha(password)
    cy.clicarCadastrar()

    cy.validarEmailCad()

})

Cypress.Commands.add('validarSenhaInvalidaCad', (user, email) => {
    cy.preencherUsuario(user)
    cy.preencherEmail(email)
    cy.preencherSenha('123')
    cy.clicarCadastrar()
    cy.validarSenhaCad()

})