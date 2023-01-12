/// <reference types='cypress' />
describe('Que abre la pagina', () => {
  it('Abre la pagina', () =>{
    cy.visit('http://127.0.0.1:5500/index.html');
  });
  it('Que carga valores por defecto por defecto', () =>{
    cy.get('#quantity').should('have.value', 1);
    cy.get('#base-rate-select').should('have.value', 'USD');
    cy.get('main').should('not.be.visible');
  });
});
describe('Que solicita datos de conversion en USD', () => {
  it ('Carga conversion rates de USD', () =>{
    cy.get('#convert-btn').click();
    cy.wait(500);
    cy.get('#rates--list:first-child').get('.value').should('contain.text', '1.00')
  })
})
describe('Que carga datos de otra moneda', () =>{
  it('Que carga datos de moneda al azar', () =>{
    const randomRate = Math.random() * (cy.get('#base-rate-select option').length - 1) + 1;    
    cy.get('#base-rate-select')[randomRate].select();
  })
})
