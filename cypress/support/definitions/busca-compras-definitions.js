import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import shoestock from '../pages/busca-compras-page';


Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
})

Given('que esteja no site do Shoestok', () => {
 shoestock.visitBuscaShoestock()	
});

And('no campo de busca digito por um produto', () => {
 shoestock.typeComprasBuscarCampo('Bolsas {enter}')	
 shoestock.clickComprasLupaBtn()
});

And('o sistema apresenta todos os produtos', () => {
  cy.get('.search-query').should('be.visible')
});

And('ao selecionar o produto desejado', () => {
 cy.get('[qa-automation="search-itens"]').first().click()
});

And('clicar em comprar', () => {
 shoestock.clickComprasComprarBtn()	
});

When('será direcionado para o carrinho', () => {
 cy.contains('Meu carrinho').should('be.visible')
});

And('que já esteja com os produtos no carrinho', () => {
 cy.get('div[class="product-item"]').should('be.visible')
});

Then('validar se esteja na tela de pagamento', () => {
	cy.get('ul[class="summary__items"]').should('be.visible')
});