describe('Products', () => {
  it('Should login and navigate to products page', () => {
    cy.login('profanis', 'password');
    cy.get('[data-cy="link-products"]').click();
    cy.url().should('includes', 'products');
  });
});
