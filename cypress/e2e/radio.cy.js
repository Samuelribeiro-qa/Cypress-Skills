describe('Radio Buttons', ()=> {

    beforeEach(()=> {
        cy.goHome()
        cy.doLogin()
         
        cy.goTo('/radio', 'Radio Buttons') 
    })

    it('Deve marcar o framework usado no curso Cypress Skills', ()=> {
        cy.contains('label', 'Cypress')
            .click()
    })

})