
describe('AfvalComponent', () => {

  it('hoi', () => {
    cy.visit('http://localhost:4200/afval')
  })

    it('should find A1', () => {
        cy.intercept({
          method: 'POST',
          url: 'http://localhost:8080/afvalinzicht',

        }, ['A1', 736, 247, '100% PES of 100%PL'])
        cy.visit('http://localhost:4200/afval')
        cy.get('span').should('contain', 'A1')
      }
    )
  it('should not find 345', () => {
      cy.intercept({
        method: 'POST',
        url: 'http://localhost:8080/afvalinzicht',

      }, ['A1', 736, 247, '100% PES of 100%PL'])
      cy.visit('http://localhost:4200/afval')
      cy.get('p').should('contain', 345)
    }
  )
  }
)


