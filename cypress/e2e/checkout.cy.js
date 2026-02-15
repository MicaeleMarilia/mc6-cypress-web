/// <reference types="cypress"/>
import { faker } from "@faker-js/faker"


describe('Checkout', () => {

    let fname
    let lname
    let cname
    let email
    let zip
    let faddress
    let messages
    let password

    beforeEach(() => {


        cy.visit('/checkout-one') //URL configurada no cypress.config

        fname = faker.person.firstName()
        lname = faker.person.lastName()
        cname = faker.company.name()
        email = faker.internet.email()
        password = faker.internet.password()
        zip = faker.location.zipCode()
        faddress = faker.location.direction()
        messages = faker.hacker.phrase()

    })

    it('Compra com sucesso', () => {
        cy.pedidoRealizadoComSucesso(fname, lname, cname, email, zip, faddress, messages)

    })

    it('Compra nome vazio', () => {
        cy.preencherSobrenome(lname)
        cy.preencherNomeEmpresa(cname)
        cy.preencherEmail(email)
        cy.preencherPais()
        cy.preencherCidade()
        cy.preencherCep(zip)
        cy.preencherEndereco(faddress)
        cy.preencherNota(messages)
        cy.clicarSalvar()
        cy.validarNome()
    })

    it('Compra sobrenome vazio', () => {
        cy.preencherNome(fname)
        cy.preencherNomeEmpresa(cname)
        cy.preencherEmail(email)
        cy.preencherPais()
        cy.preencherCidade()
        cy.preencherCep(zip)
        cy.preencherEndereco(faddress)
        cy.preencherNota(messages)
        cy.clicarSalvar()
        cy.validarSobrenome()
    })

    it('Compra nome empresa vazio', () => {
        cy.preencherNome(fname)
        cy.preencherSobrenome(lname)
        cy.preencherEmail(email)
        cy.preencherPais()
        cy.preencherCidade()
        cy.preencherCep(zip)
        cy.preencherEndereco(faddress)
        cy.preencherNota(messages)
        cy.clicarSalvar()
        cy.validarEmpresa()
    })

    it('Compra email vazio', () => {
        cy.preencherNome(fname)
        cy.preencherSobrenome(lname)
        cy.preencherNomeEmpresa(cname)
        cy.preencherPais()
        cy.preencherCidade()
        cy.preencherCep(zip)
        cy.preencherEndereco(faddress)
        cy.preencherNota(messages)
        cy.clicarSalvar()
        cy.validarEmailChek()
    })

    it('Compra email invalido', () => {
        cy.preencherNome(fname)
        cy.preencherSobrenome(lname)
        cy.preencherNomeEmpresa(cname)
        cy.preencherEmail('emailinvalido@')
        cy.preencherPais()
        cy.preencherCidade()
        cy.preencherCep(zip)
        cy.preencherEndereco(faddress)
        cy.preencherNota(messages)
        cy.clicarSalvar()
        cy.validarEmailChek()
    })

    it('Compra pais vazio', () => {
        cy.preencherNome(fname)
        cy.preencherSobrenome(lname)
        cy.preencherNomeEmpresa(cname)
        cy.preencherEmail(email)
        cy.preencherCidade()
        cy.preencherCep(zip)
        cy.preencherEndereco(faddress)
        cy.preencherNota(messages)
        cy.clicarSalvar()
        cy.validarPais()
    })

    it('Compra estado/cidade vazio', () => {
        cy.preencherNome(fname)
        cy.preencherSobrenome(lname)
        cy.preencherNomeEmpresa(cname)
        cy.preencherEmail(email)
        cy.preencherPais()
        cy.preencherCep(zip)
        cy.preencherEndereco(faddress)
        cy.preencherNota(messages)
        cy.clicarSalvar()
        cy.validarCidade()
    })

    it('Compra cep vazio', () => {
        cy.preencherNome(fname)
        cy.preencherSobrenome(lname)
        cy.preencherNomeEmpresa(cname)
        cy.preencherEmail(email)
        cy.preencherPais()
        cy.preencherCidade()
        cy.preencherEndereco(faddress)
        cy.preencherNota(messages)
        cy.clicarSalvar()
        cy.validarCep()
    })

    it('Compra endereco vazio', () => {
        cy.preencherNome(fname)
        cy.preencherSobrenome(lname)
        cy.preencherNomeEmpresa(cname)
        cy.preencherEmail(email)
        cy.preencherPais()
        cy.preencherCidade()
        cy.preencherCep(zip)
        cy.preencherNota(messages)
        cy.clicarSalvar()
        cy.validarEndereco()
    })

    it('Compra notas vazia', () => {
        cy.preencherNome(fname)
        cy.preencherSobrenome(lname)
        cy.preencherNomeEmpresa(cname)
        cy.preencherEmail(email)
        cy.preencherPais()
        cy.preencherCidade()
        cy.preencherCep(zip)
        cy.preencherEndereco(faddress)
        cy.clicarSalvar()
        cy.validarNotas()
    })


    it('Salvar informacoes de faturamento com sucesso', () => {
        cy.preencherCampos(fname, lname, cname, email, zip, faddress, messages)
        cy.clicarSavarAddressBook()
        cy.clicarSalvar()
        cy.validarSalvar()
    })

    it('Validar dados do pagamento vazio', () => {
        cy.clicarFazerPedido()
        cy.validarPagamento()
    })




})