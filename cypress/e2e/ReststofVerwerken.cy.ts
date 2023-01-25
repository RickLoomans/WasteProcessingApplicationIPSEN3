describe('Verwerkwen van stoffen', () => {


  //Test number 1
  it('should find 88', () => {
      cy.intercept({
        method: 'GET',
        url: 'http://localhost:8080/orderlijst',

      }, [
        {
          "artikelnr": "IMANI IFR-16-300",
          "metrage": 88,
          "klantid": 9,
          "gewicht": 1,
          "samenstelling": "100 PL"
        }])
      cy.visit('http://localhost:4200/orderlijst')
      cy.get('td').should('contain', 88)
    }
  )

  //Test number 2
  it('should verwerk and show Klant', () => {
      cy.intercept({
        method: 'GET',
        url: 'http://localhost:8080/orderlijst',

      }, [
        {
          "artikelnr": "IMANI IFR-16-300",
          "metrage": 23,
          "klantid": 11,
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

    cy.intercept({
        method: 'GET',
        url: 'http://localhost:8080/stof?artikelnr=IMANI%20IFR-16-300',
      },
      {"id":0,"artikelnr":"IMANI%20IFR-16-300","leverancier":"Artimo","productgroep":"Gordijnstoffen","omschrijving":"liko","kleur":"22","stofbreedte":300.0,"patroonlengte":0.0,"patroonbreedte":0.0,"soort":"WEEFSTOF","opmaak":"KAMERHOOG","samenstelling":"100 PL","gewicht":819.0,"klantOrder":{"vervoerder":"Post NL","verpakking":"verpakking","inhoud":1,"ordernr":"26426.97162.726.781","label":"xy"},"magazijnOrder":null,"afval":null,"reststof":{"soortorder":"klant retour","metrage":33.0,"klantid":11},"eancode":"LIKO IFR-22-300"})

    cy.contains('td', '100 PL')
      .parent('tr')
      .children('td')
      .find('button')
      .click()
    }
  )

  //Test number 3
  it('should verwerk and show Categorie', () => {
      cy.intercept({
        method: 'GET',
        url: 'http://localhost:8080/orderlijst',

      }, [
        {
          "artikelnr": "IMANI IFR-16-300",
          "metrage": 2,
          "klantid": 11,
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
      url: 'http://localhost:8080/categorie/naam?naam=B3',
    },{
      "naam": "B3",
      "eis": "100% TREVIRA"
    })
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8080/stof?artikelnr=IMANI%20IFR-16-300',
    },
      {"id":0,"artikelnr":"IMANI%20IFR-16-300","leverancier":"Artimo","productgroep":"Gordijnstoffen","omschrijving":"liko","kleur":"22","stofbreedte":300.0,"patroonlengte":0.0,"patroonbreedte":0.0,"soort":"WEEFSTOF","opmaak":"KAMERHOOG","samenstelling":"100 PL","gewicht":819.0,"klantOrder":{"vervoerder":"Post NL","verpakking":"verpakking","inhoud":1,"ordernr":"26426.97162.726.781","label":"xy"},"magazijnOrder":null,"afval":null,"reststof":{"soortorder":"klant retour","metrage":33.0,"klantid":11},"eancode":"LIKO IFR-22-300"})

      cy.contains('td', '100 PL')
        .parent('tr')
        .children('td')
        .find('button')
        .click()
    }
  )

  //Test number 4
  it('should verwerk and show Categorie and open label', () => {
      cy.intercept({
        method: 'GET',
        url: 'http://localhost:8080/orderlijst',

      }, [
        {
          "artikelnr": "IMANI IFR-16-300",
          "metrage": 2,
          "klantid": 11,
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
        url: 'http://localhost:8080/categorie/naam?naam=B3',
      },{
        "naam": "B3",
        "eis": "100% TREVIRA"
      })
      cy.intercept({
          method: 'GET',
          url: 'http://localhost:8080/stof?artikelnr=IMANI%20IFR-16-300',
        },
        {"id":0,"artikelnr":"IMANI%20IFR-16-300","leverancier":"Artimo","productgroep":"Gordijnstoffen","omschrijving":"liko","kleur":"22","stofbreedte":300.0,"patroonlengte":0.0,"patroonbreedte":0.0,"soort":"WEEFSTOF","opmaak":"KAMERHOOG","samenstelling":"100 PL","gewicht":819.0,"klantOrder":{"vervoerder":"Post NL","verpakking":"verpakking","inhoud":1,"ordernr":"26426.97162.726.781","label":"xy"},"magazijnOrder":null,"afval":null,"reststof":{"soortorder":"klant retour","metrage":33.0,"klantid":11},"eancode":"LIKO IFR-22-300"})

      cy.contains('td', '100 PL')
        .parent('tr')
        .children('td')
        .find('button')
        .click()

    cy.wait(500)

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8080/label/IMANI%20IFR-16-300',
    },
      {"no": "Wat de api zou returnen is nogal groot dus plaats ik dat niet"})

    cy.contains('div', 'Label pdf bekijken')
      .find('button')
      .click()

    }
  )
})
