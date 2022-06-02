Feature: Buscar por um produto
  Como um cliente quero fazer uma busca pelo produto desejado
  adicionar ao carrinho e confirmar se o produto está na tela de pagamento


 Scenario: Busca de produtos 
  Given que esteja no site do Shoestok
  And no campo de busca digito por um produto
  And o sistema apresenta todos os produtos
  And ao selecionar o produto desejado
  When clicar em comprar
  And será direcionado para o carrinho
  Then validar se esteja na tela de pagamento

