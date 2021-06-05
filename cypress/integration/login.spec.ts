describe('Login', () => {
  it('Should not login if the form is invalid', () => {
    cy.visit('/');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="username"]').type('profanis');
    cy.get('button').click();
    cy.url().should('not.include', 'dashboard');
  });

  it('Should login if the form is valid', () => {
    cy.login('profanis', 'password');
    cy.url().should('include', 'dashboard');
  });
});
