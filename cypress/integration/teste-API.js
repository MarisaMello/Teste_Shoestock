describe('Desafio API ', () => {
  
    it('Buscar name dentro de list', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.data.list.name).to.equal('Professional')
    
      })
    })
  })