
describe('AfvalComponent', () => {

  it('hoi', () => {
    cy.visit('http://localhost:4200/afval')
  })

  it('should find 45', () => {
      cy.intercept({
        method: 'POST',
        url: 'http://localhost:8080/orderlijst',

      }, ['ANKA FR-12-280', 45, 2, '100% PES', 9])
      cy.visit('http://localhost:4200/orderlijst')
      cy.get('td').should('contain', 45)
    }
  )

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


