describe('Input Fields', ()=> {

beforeEach(()=> {
    cy.goHome()
    cy.doLogin()
    
    cy.get('nav a[href="/input-fields"]')
    .click()
})

    it('Deve preencher o campo texto', ()=> {

        cy.contains('h2', 'Input Fields')
            .should('be.visible')

        cy.get('input[name="fullname"]')
            .type('Samuel Vinicius')

        cy.get('input[type="email"]')
            .type('samuel@ribeiro.QA')

        cy.get('input[name="number"]')
            .type('2025')

            cy.get('input[name="date"]')
            .type('2025-02-06')
    })

})