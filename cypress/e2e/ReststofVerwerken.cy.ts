describe('Verwerkwen van stoffen', () => {

  it('should find 88', () => {
      cy.intercept({
        method: 'GET',
        url: 'http://localhost:8080/orderlijst',

      }, [
        {
          "artikelnr": "IMANI IFR-16-300",
          "metrage": 88,
          "klantid": 9,
          "magazijnid": 4,
          "gewicht": 1,
          "samenstelling": "100 PL"
        }])
      cy.visit('http://localhost:4200/orderlijst')
      cy.get('td').should('contain', 88)
    }
  )

  it('should verwerk and show Klant', () => {
      cy.intercept({
        method: 'GET',
        url: 'http://localhost:8080/orderlijst',

      }, [
        {
          "artikelnr": "IMANI IFR-16-300",
          "metrage": 23,
          "klantid": 11,
          "magazijnid": 4,
          "gewicht": 20,
          "samenstelling": "100 PL"
        }])
      cy.visit('http://localhost:4200/orderlijst')
    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8080/reststofverwerken',
    },[
      "klant",
      "68280.32285.350.840"
    ])

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8080/klant?id=11',
    },{
      "klantid": 11,
      "min_restant_retour": 10,
      "max_restant_retour": 80,
      "voornaam": "Rick",
      "achternaam": "Loomans",
      "tussenvoegsel": "",
      "straatnaam": "Dorpstraat",
      "huisnummer": 9,
      "postcode": "7529IK",
      "land": "Nederland"
    })
    cy.contains('td', '100 PL')
      .parent('tr')
      .children('td')
      .find('button')
      .click()
    }
  )

  it('should verwerk and show Categorie', () => {
      cy.intercept({
        method: 'GET',
        url: 'http://localhost:8080/orderlijst',

      }, [
        {
          "artikelnr": "IMANI IFR-16-300",
          "metrage": 2,
          "klantid": 11,
          "magazijnid": 4,
          "gewicht": 20,
          "samenstelling": "100 PL"
        }])
      cy.visit('http://localhost:4200/orderlijst')
      cy.intercept({
        method: 'POST',
        url: 'http://localhost:8080/reststofverwerken',
      },[
        "AfvalCategorie: B3",
        "97314.11184.605.893"
      ])

      cy.intercept({
        method: 'GET',
        url: 'http://localhost:8080/klant?id=11',
      },{
        "klantid": 11,
        "min_restant_retour": 10,
        "max_restant_retour": 80,
        "voornaam": "Rick",
        "achternaam": "Loomans",
        "tussenvoegsel": "",
        "straatnaam": "Dorpstraat",
        "huisnummer": 9,
        "postcode": "7529IK",
        "land": "Nederland"
      })

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8080/categorie/naam?naam=A3',
    },{
      "naam": "B3",
      "eis": "100% TREVIRA"
    })

      cy.contains('td', '100 PL')
        .parent('tr')
        .children('td')
        .find('button')
        .click()
    }
  )
})
