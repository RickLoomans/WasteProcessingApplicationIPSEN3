describe('RegistrerenComponent', () => {
  const usernameAdmin = 'TestAdmin';
  const passwordAdmin = '226006392';
  const newUsernaame = 'Bil';
  const newEmail = 'bil@gmail.com';
  it('should register an account', () => {
    cy.visit('http://localhost:4200/login')
      cy.get('input[name=username]').type(usernameAdmin);
    cy.get('input[name = password]').type(passwordAdmin);
    cy.get('button[name=login]').click();
    cy.url().should('include','home');
    cy.get('button[name=admin]').click();
    cy.get('button[name=admin]').click();
    cy.url().should('include','admin');
    cy.get('button[name=registreer]').click();
    cy.url().should('include','registeren');
    cy.get('input[name=username]').type(newUsernaame);
    cy.get('input[name = email]').type(newEmail);
    cy.get('input[value=user]').click();
    cy.get('button[name=registreren]').click();
    cy.url().should('include','admin');
  }
  )
  // it('should not sign in', () => {
  //   cy.visit('http://localhost:4200/login')
  //     cy.get('input[name=username]').type(username2);
  //   cy.get('input[name = password]').type(password);
  //   cy.get('button[name=login]').click();
  //   cy.url().should('include','home');
  // }
  // )
  // it('should not navigate', ()=>{
  //   cy.visit('http://localhost:4200/login')
  //   cy.get('button[name=home]').click();
  //   cy.url().should('include','login');
  // })


})
