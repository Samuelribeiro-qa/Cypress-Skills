describe('Select', ()=> {

    beforeEach(()=> {
        cy.goHome()
        cy.doLogin()
         
        cy.goTo('/select', 'Select') 
    })

    it('Deve selecionar o Cypress', ()=> {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')

    })

    it('Deve escolher as linguagens que usam node.js', ()=> {

        const langs =['Java', 'TypeScript']

        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()

        langs.forEach(lang => {
            cy.contains('.option-item', new RegExp("^" + lang + "$"))
            .click()
        })

        cy.get('.language-item')
            .should('have.length', langs.length)

    })

})