import {AfvalComponent} from "./afval.component";
import {AfvallijstComponent} from "./afvallijst/afvallijst.component";
import { mount } from 'cypress/angular'
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TestBed, inject } from '@angular/core/testing';
import {AfvalService} from "./afval.service";
import {of} from "rxjs";

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


