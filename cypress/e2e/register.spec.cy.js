describe('RegistrerenComponent', () => {
  const usernameAdmin = 'TestAdmin';
  const passwordAdmin = '226006392';
  const newUsername = 'Bil';
  const newEmail = 'bil@gmail.com';
  const newUsername2 = 'NietBil';
  const newEmail2 = 'nietbil@gmail.com';

  it('should register an account', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('input[name=username]').type(usernameAdmin);
    cy.get('input[name = password]').type(passwordAdmin);
    cy.get('button[name=login]').click();
    cy.url().should('include','home');
    cy.get('button[name=admin]').click();
    cy.get('button[name=admin]').click();
    cy.url().should('include','admin');
    cy.get('button[name=registreer]').click();
    cy.url().should('include','registeren');
    cy.get('input[name=username]').type(newUsername);
    cy.get('input[name = email]').type(newEmail);
    cy.get('input[value=user]').click();
    cy.get('button[name=registreren]').click();
    cy.wait(7000);
    cy.url().should('include','admin');
  }
  )
  it('should not register an account because email already exists', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('input[name=username]').type(usernameAdmin);
    cy.get('input[name = password]').type(passwordAdmin);
    cy.get('button[name=login]').click();
    cy.url().should('include','home');
    cy.get('button[name=admin]').click();
    cy.get('button[name=admin]').click();
    cy.url().should('include','admin');
    cy.get('button[name=registreer]').click();
    cy.url().should('include','registeren');
    cy.get('input[name=username]').type(newUsername2);
    cy.get('input[name = email]').type(newEmail);
    cy.get('input[value=user]').click();
    cy.get('button[name=registreren]').click();
    cy.wait(7000);
    cy.url().should('include','registeren');
  })
  it('should not register an account because username is already taken', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('input[name=username]').type(usernameAdmin);
    cy.get('input[name = password]').type(passwordAdmin);
    cy.get('button[name=login]').click();
    cy.url().should('include','home');
    cy.get('button[name=admin]').click();
    cy.get('button[name=admin]').click();
    cy.url().should('include','admin');
    cy.get('button[name=registreer]').click();
    cy.url().should('include','registeren');
    cy.get('input[name=username]').type(newUsername);
    cy.get('input[name = email]').type(newEmail2);
    cy.get('input[value=user]').click();
    cy.get('button[name=registreren]').click();
    cy.wait(7000);
    cy.url().should('include','registeren');
  })
})
