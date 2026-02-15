/// <reference types="cypress"/>

Cypress.Commands.add('preencherNome', (fname) => {
    cy.get('#fname').type(fname)
})

Cypress.Commands.add('preencherSobrenome', (lname) => {
    cy.get('#lname').type(lname)
})

Cypress.Commands.add('preencherNomeEmpresa', (cname) => {
    cy.get('#cname').type(cname)
})

Cypress.Commands.add('preencherPais', () => {
    cy.get('#country').select('usa')
})

Cypress.Commands.add('preencherCidade', () => {
    cy.get('#city').select(2)
})

Cypress.Commands.add('preencherCep', (zip) => {
    cy.get('#zip').type(zip)
})

Cypress.Commands.add('preencherEndereco', (faddress) => {
    cy.get('#faddress').type(faddress)
})

Cypress.Commands.add('preencherNota', (messages) => {
    cy.get('#messages').type(messages)
})

Cypress.Commands.add('clicarSavarAddressBook', () => {
    cy.get('#materialUnchecked').check()
})

Cypress.Commands.add('clicarSalvar', () => {
    cy.get('.checkout-area-bg > .theme-btn-one').click()
})

Cypress.Commands.add('preencherCampos', (fname, lname, cname, email, zip, faddress, messages) => {
    cy.preencherNome(fname)
    cy.preencherSobrenome(lname)
    cy.preencherNomeEmpresa(cname)
    cy.preencherEmail(email)
    cy.preencherPais()
    cy.preencherCidade()
    cy.preencherCep(zip)
    cy.preencherEndereco(faddress)
    cy.preencherNota(messages)
})

Cypress.Commands.add('validarSalvar', () => {
    cy.get('#checkout_one')
        .should('be.visible')
        .should('contain', 'Billings Information registred with success!')
})

Cypress.Commands.add('selecionarMetodoPagamento', () => {
    cy.get('#javascript').check()
})

Cypress.Commands.add('clicarFazerPedido', () => {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
})

Cypress.Commands.add('validarConfirmacaoPedido', () => {
    cy.get('.modal')
        .should('be.visible')
        .should('contain', 'Order success!')
        .should('contain', 'Congrats! Your order was created with sucess!')
})

Cypress.Commands.add('pedidoRealizadoComSucesso', (fname, lname, cname, email, zip, faddress, messages) => {
    cy.preencherCampos(fname, lname, cname, email, zip, faddress, messages)

    cy.clicarSavarAddressBook()

    cy.clicarSalvar()
    cy.validarSalvar()

    cy.selecionarMetodoPagamento()
    cy.clicarFazerPedido()
    cy.validarConfirmacaoPedido()
})

Cypress.Commands.add('validarNome', () => {
    cy.get('#errorMessageFirstName')
        .should('have.text', 'O campo First Name deve ser prenchido')
        .should('be.visible')

})

Cypress.Commands.add('validarSobrenome', () => {
    cy.get('#errorMessageFirstName')
        .should('have.text', 'O campo Last Name deve ser prenchido')
        .should('be.visible')

})

Cypress.Commands.add('validarEmpresa', () => {
    cy.get('#errorMessageFirstName')
        .should('have.text', 'O campo Company deve ser prenchido')
        .should('be.visible')

})

Cypress.Commands.add('validarEmailChek', () => {
    cy.get('#errorMessageFirstName')
        .should('have.text', 'O campo E-mail deve ser prenchido ou é inválido')
        .should('be.visible')

})

Cypress.Commands.add('validarPais', () => {
    cy.get('#errorMessageFirstName')
        .should('have.text', 'O campo Country deve ser prenchido')
        .should('be.visible')
})

/*
Cypress.Commands.add('validarMensagemSalvar', () => {
    cy.contains('Billings Information registred with success!')
        .should('not.exist')
})
*/

Cypress.Commands.add('validarCidade', () => {
    cy.get('#errorMessageFirstName')
        .should('have.text', 'O campo City deve ser prenchido')
        .should('be.visible')

})

Cypress.Commands.add('validarCep', () => {
    cy.get('#errorMessageFirstName')
        .should('have.text', 'O campo Zip Code deve ser prenchido')
        .should('be.visible')

})

Cypress.Commands.add('validarEndereco', () => {
    cy.get('#errorMessageFirstName')
        .should('have.text', 'O campo Address deve ser prenchido')
        .should('be.visible')

})

Cypress.Commands.add('validarNotas', () => {
    cy.get('#errorMessageFirstName')
        .should('have.text', 'O campo Additional Notes deve ser prenchido')
        .should('be.visible')

})

Cypress.Commands.add('validarPagamento', () => {
    cy.get('#errorMessageFirstName')
        .should('have.text', 'Preencha os dados de pagamento!')
        .should('be.visible')

})