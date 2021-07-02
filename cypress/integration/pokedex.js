/* eslint-disable linebreak-style */
describe('Pokedex', function () {
  beforeEach(function () {
    cy.visit('http://localhost:5000')
  })
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('can navigate to a particular pokemon from main page', function () {
    cy.contains('ivysaur').click()
    cy.contains('ivysaur')
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})