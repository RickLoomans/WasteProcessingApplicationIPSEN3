import { Component } from '@angular/core';
import {ResultaatModel} from "../resultaat-verwerken-stof/resultaat-model";
import {ReststofVerwerkenComponent} from "../reststof-verwerken.component";
import {StofService} from "../stof-service";
import {StofModel} from "../stof-model";

@Component({
  selector: 'app-resultaat-details',
  templateUrl: './resultaat-details.component.html',
  styleUrls: ['./resultaat-details.component.scss']
})
export class ResultaatDetailsComponent {
  resultaatModel: ResultaatModel | undefined;
  metrage: number = 3;
  gewicht: string = '';
  artikelnummer: string = '';
  leverancier: string = '';
  productgroep: string = '';
  kleur: string = '';
  soort: string = '';
  ordernummer: string = '';

  constructor(private stofService: StofService) { }

  ngOnInit(): void {
    this.resultaatModel = ResultaatModel.getInstance();
    console.log(this.resultaatModel.artikelnr)

    this.metrage = this.resultaatModel.metrage;
    this.artikelnummer = this.resultaatModel.artikelnr;

    this.stofService.fetchStof(this.artikelnummer).subscribe(responseData => {
      console.log(responseData);
      const stofData = ((<StofModel><unknown>responseData));
      this.gewicht = stofData.gewicht;
      this.artikelnummer = stofData.artikelnr;
      this.leverancier = stofData.leverancier;
      this.productgroep = stofData.productgroep;
      this.kleur = stofData.kleur;
      this.soort = stofData.soort;
      this.ordernummer = stofData.klantOrder.ordernr;
    });
    //ToDo klant gegevens ophalen, moet het klantId van de input halen (wacht tot na maken forms) en moet de backend fixen, krijg momenteel OneToOne OneToMany error tijdens het opahlen
  }
}
