describe('Tags', ()=> {

    beforeEach(()=> {
        cy.goHome()
        cy.doLogin()
         
        cy.goTo('/tags', 'Tags') 
    })

    it('Deve adiconar algumas tags', ()=> {

        const tags = ['Cypress', 'JavaScript', 'Nodejs']

        tags.forEach(t => {
            cy.get('.new-tag')
                .type(`${t}{Enter}`)
                .should('have.value', '')
            cy.wait(500)  //think time = tempo de pensar
        })

        tags.forEach(t => {
            cy.get('.tag-input')
                .should('contain', t)
        })

    })

})