import {Component, Input} from '@angular/core';
import {ResultaatModel} from "../resultaat-verwerken-stof/resultaat-model";
import {StofService} from "../stof-service";
import {StofModel} from "../stof-model";
import {OrderModel} from "../../orderlijst/order.model";
import {KlantService} from "../klant-service";
import {KlantModel} from "../klant-model";
import {CategorieService} from "../categorie-service";
import {CategorieModel} from "../categorie-model";
import {LabelService} from "../label-service";

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
  processedTrash: boolean = false;

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
    gewicht: 0,
    metrage: 0,
    samenstelling: "",
    artikelnr: ""
  }

  categorieData: CategorieModel = {
    naam: "",
    eis: ""
  }

  @Input() resultOfProcessing: string[] = [];

  constructor(private stofService: StofService, private klantService: KlantService, private categorieService: CategorieService, private labelService: LabelService) { }

  ngOnInit(): void {
  }

  public getDetails(verwerkteStofDetails: OrderModel, responeData: string[]) {
    this.processedTrash = false;
    if (!this.hasProcessed) {
      this.hasProcessed = true;
    }

    this.stofService.fetchStof(verwerkteStofDetails.artikelnr).subscribe(responseData => {
      const stofData = ((<StofModel><unknown>responseData));
      this.verwerkteStof = verwerkteStofDetails;
      this.leverancier = stofData.leverancier;
      this.productgroep = stofData.productgroep;
      this.kleur = stofData.kleur;
      this.soort = stofData.soort;
      this.verwerkteStof.samenstelling = stofData.samenstelling;
    });

    this.klantService.fetchKlant(verwerkteStofDetails.klantid).subscribe(responseData => {
      this.klantData = ((<KlantModel><unknown>responseData))
    })

    if (responeData[0].startsWith("Afval")){
      this.processedTrash = true;
      this.categorieService.fetchCategory(responeData[0].replace("AfvalCategorie: ", "")).subscribe( responseData => {
        this.categorieData = ((<CategorieModel><unknown>responseData))
      })
    }
  }

  openLabel() {
    this.labelService.fetchLabel(this.verwerkteStof.artikelnr).subscribe( responseData => {
      var blob = new Blob([responseData], { type: 'application/pdf' });
      var fileURL = window.URL.createObjectURL(blob)
      window.open(fileURL);
    })
  }
}
