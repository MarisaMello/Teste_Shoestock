class shoestock{
    visitBuscaShoestock() {
     cy.visit('https://www.shoestock.com.br/');
    }
    
    compras = {
      buscarCampo:      () => cy.get('#search-input'),
      lupaBtn:          () => cy.get('button[qa-automation="home-search-button"]'),
      itens:            () => cy.get('[qa-automation="search-itens"]'),
      comprarBtn:       () => cy.xpath(`//button[@id="buy-button-now"][contains(.,"Comprar")]`),
      
    }
    typeComprasBuscarCampo(String){
      this.compras.buscarCampo().type(String)
    }
    clickComprasLupaBtn(){
      this.compras.lupaBtn().click()
    }
    clickComprasComprarBtn(){
      this.compras.comprarBtn().click()
    }
    
  }
  export default new shoestock();