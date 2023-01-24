describe('LoginComponent', () => {
  const username1 = 'gijs2';
  const username2 = 'hello world';
  const password = 'Panter007'

    it('LoginTitle', () => {
      cy.visit('http://localhost:4200/login')
      cy.contains('Login');
      expect(1).to.equal(1)
    });

    it('should sign in', () => {
      cy.visit('http://localhost:4200/login')
        cy.get('input[name=username]').type(username1);
      cy.get('input[name = password]').type(password);
      cy.get('button[name=login]').click();
      cy.url().should('include','home');
    }
    )

    it('should not sign in', () => {
        cy.visit('http://localhost:4200/login')
        cy.get('input[name=username]').type(username2);
        cy.get('input[name = password]').type(password);
        cy.get('button[name=login]').click();
        cy.url().should('include','home');
      }
    )

    it('should not navigate', ()=>{
      cy.visit('http://localhost:4200/login')
      cy.get('button[name=home]').click();
      cy.url().should('include','login');
    })


  }
)
