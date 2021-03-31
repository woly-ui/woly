describe('first test', () => {
  it('button', () => {
    cy.visit('/package/woly/component/button');
    cy.get('[data-cypress="button"]', { timeout: 5000 }).should('be.visible');
    let item = cy.get('[data-element-variant]');
    item.each((element) => {
      const name = element.attr('data-element-variant') ?? '';
      const target = cy.wrap(element).children().first();

      const nameDefault = name + '-default';
      target.screenshot(nameDefault, { padding: 15 });

      const nameHover = name + '-hover';
      target.realHover({ pointer: 'pen', position: 'center' });
      target.screenshot(nameHover, { padding: 15 });

      const nameFocus = name + '-focus';
      target.realClick();
      target.screenshot(nameFocus, { padding: 15 });
    });
  });
});
