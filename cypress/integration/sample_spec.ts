describe('my first test', () => {
  it('does not do much', () => {
    expect(true).to.equal(true);
  });
});

describe('first test', () => {
  it('button', () => {
    cy.visit('/package/woly/component/button');
    cy.get('[data-cypress="button"]', { timeout: 5000 }).should('be.visible');
    cy.percySnapshot('button');
  });
});
