
describe('CategorieComponent', () => {
  it("should find button toevoegen", () => {
    cy.visit('http://localhost:4200/categorietoevoegen')
    cy.get('button').should('contain', 'Toevoegen')
  })


  //unhappy flow:
  it('should not be able to click on button', () => {
      cy.visit('http://localhost:4200/categorietoevoegen')
      cy.contains('Toevoegen').click()
    }
  )

  //unhappy flow:
  it('should not be able to click on button', () => {
      cy.visit('http://localhost:4200/categorietoevoegen')
      cy.get('#naam').type('C10')
      cy.contains('Toevoegen').click()
    }
  )

  //unhappy flow:
  it('should not be able to click on button', () => {
    cy.visit('http://localhost:4200/categorietoevoegen')
    cy.get('#eisen').type('100% PO')
    cy.get('#kleur').type('102')
    cy.contains('Toevoegen').click();
  })

  it('should not be able to click on button', () => {
    cy.visit('http://localhost:4200/categorietoevoegen')
    cy.get('#naam').type('C10')
    cy.get('#kleur').type('102')
    cy.contains('Toevoegen').click();
  })

  it('should not be able to click on button', () => {
    cy.visit('http://localhost:4200/categorietoevoegen')
    cy.get('#kleur').type('102')
    cy.contains('Toevoegen').click();
  })

  it('should find Er is al een categorie met deze eisen', () => {
    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8080/categorie/add',

    }, 'Er is al een categorie met deze eisen')
    cy.visit('http://localhost:4200/categorietoevoegen')
    cy.get('#naam').type('C9')
    cy.get('#eisen').type('100% PO')
    cy.contains('Toevoegen').click();
    cy.get('app-categorie-alert').should('contain', 'Er is al een categorie met deze eisen')
  })

  it('should be able to press button', () => {
    cy.visit('http://localhost:4200/categorietoevoegen')
    cy.get('#naam').type('C9')
    cy.get('#eisen').type('100% PO')
    cy.contains('Toevoegen').click();
  })

  it('should be able to press button', () => {
    cy.visit('http://localhost:4200/categorietoevoegen')
    cy.get('#naam').type('C9')
    cy.get('#eisen').type('100% PO')
    cy.get('#kleur').type('102')
    cy.contains('Toevoegen').click();
  })

})
