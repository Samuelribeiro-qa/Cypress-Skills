describe('Date Picker', ()=> {

    beforeEach(()=> {
        cy.goHome()
        cy.doLogin()
         
        cy.goTo('/date-picker', 'Date Picker') 
    })

    it('Deve adicionar minha data de aniversário', ()=> {

        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('.flatpickr-monthDropdown-months')
            .select('Outubro')

        cy.get('input[aria-label="Year"]')
            .type('2005')

        cy.get('span[aria-label="Outubro 28, 2005"]')
            .click()

    })

})
