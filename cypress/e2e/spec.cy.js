context('Test', () => { 
  it('test1',() => { 
    cy.visit('https://google.com') 
    cy.get('abcd') 
  }) 
})