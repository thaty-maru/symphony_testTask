describe('UI Test', () => {

  it('Check Order', () => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get("#login-button").click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.get('[class="active_option"]').should('have.text', 'Name (A to Z)')
    cy.get('.product_sort_container').select(1)
    cy.get('[class="active_option"]').should('have.text', 'Name (Z to A)')
  })
})