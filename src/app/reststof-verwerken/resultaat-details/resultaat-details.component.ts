import {Component} from '@angular/core';
import {ResultaatModel} from "../resultaat-verwerken-stof/resultaat-model";
import {StofService} from "../stof-service";
import {StofModel} from "../stof-model";
import {OrderModel} from "../../orderlijst/order.model";
import {KlantService} from "../klant-service";
import {KlantModel} from "../klant-model";

@Component({
  selector: 'app-resultaat-details',
  templateUrl: './resultaat-details.component.html',
  styleUrls: ['./resultaat-details.component.scss']
})
export class ResultaatDetailsComponent {
  resultaatModel: ResultaatModel | undefined;
  leverancier: string = '';
  productgroep: string = '';
  kleur: string = '';
  soort: string = '';
  ordernummer: string = '';

  hasProcessed: boolean = false;

  klantData: KlantModel = {
    achternaam: "",
    huisnummer: "",
    klantid: 0,
    land: "",
    max_restant_retour: 0,
    min_restant_retour: 0,
    postcode: "",
    straatnaam: "",
    tussenvoegsel: "",
    voornaam: ""
  };

  verwerkteStof: OrderModel = {
    klantid: 0,
    magazijnid: 0,
    gewicht: 0,
    metrage: 0,
    samenstelling: "",
    kleur: "",
    artikelnr: ""
  }

  constructor(private stofService: StofService, private klantService: KlantService) { }

  ngOnInit(): void {
  }

  public getDetails(verwerkteStofDetails: OrderModel) {
    if (!this.hasProcessed) {
      this.hasProcessed = true;
    }

    this.stofService.fetchStof(verwerkteStofDetails.artikelnr).subscribe(responseData => {
      const stofData = ((<StofModel><unknown>responseData));
      this.verwerkteStof = verwerkteStofDetails
      this.leverancier = stofData.leverancier;
      this.productgroep = stofData.productgroep;
      this.kleur = stofData.kleur;
      this.soort = stofData.soort;
    });

    this.klantService.fetchKlant(verwerkteStofDetails.klantid).subscribe(responseData => {
      this.klantData = ((<KlantModel><unknown>responseData));
      console.log(this.klantData);
    })
  }
}
