describe('test', () => {
    it('should visit google.com', function () {
        cy.visit("www.google.com")
    });
})

describe('testafval', () => {
  it('should load afval', function () {
    //cy.intercept(
     // {
      //  method: 'GET', // Route all GET requests
       // url: '/afvalinzicht/*', // that have a URL that matches '/users/*'
      //},
     // ['A1', 736, 247, '100% PES of 100%PL'] // and force the response to be: []
    //).as('getAfval') // and assign an alias
    cy.visit('/afval')
    //cy.get('p').should('contain', '100% PES of 100%PL')
  })
})
///
//describe('Lijst met afvalstoffen', () => {
//  beforeEach(() => {
    // reset and seed the database prior to every test
    //cy.exec('npm run db:reset && npm run db:seed')

    // seed a post in the DB that we control from our tests
  //  cy.request('POST', '/test/seed/post', {
  //    title: 'First Post',
 //     authorId: 1,
    //  body: '...',
 //   })

    // seed a user in the DB that we can control from our tests
  //  cy.request('POST', '/test/seed/user', { name: 'Jane' })
 //     .its('body')
 //     .as('currentUser')
 // })

// it('successfully loads', () => {
//    // this.currentUser will now point to the response
    // body of the cy.request() that we could use
    // to log in or work with in some way

 //   cy.visit('/')
//  })
//})
