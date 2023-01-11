import {AfvalComponent} from "./afval.component";
import { mount } from 'cypress/angular'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}
describe('AfvalComponent', () => {

  it('stepper should default to 0', () => {
      cy.intercept({
        method: 'GET',
        url: 'http://localhost:4200/afval',
      }, ['A1', 736, 247, '100% PES of 100%PL'])
    cy.visit('/afval')
      cy.get('p').should('have.id', 'afvaltabel')
    }
  )
}
)


