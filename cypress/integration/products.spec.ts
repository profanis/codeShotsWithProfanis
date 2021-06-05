describe('Products', () => {
  it('Should login and navigate to products page', () => {
    cy.login('profanis', 'password');
    cy.get('app-navigation li').eq(1).click();
    cy.url().should('includes', 'products');
  });
});
