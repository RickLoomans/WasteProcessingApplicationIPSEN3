import { Component } from '@angular/core';
import {ResultaatModel} from "../resultaat-verwerken-stof/resultaat-model";
import {ReststofVerwerkenComponent} from "../reststof-verwerken.component";

@Component({
  selector: 'app-verwerken-input',
  templateUrl: './verwerken-input.component.html',
  styleUrls: ['./verwerken-input.component.scss']
})
export class VerwerkenInputComponent {
  apiOut:string = '';
  temp: ResultaatModel | undefined;

  verwerken() {
    this.apiOut = Math.random() > 0.5 ? 'magazijn' : 'retour';
    this.apiOut = Math.random() > 0.24 ? this.apiOut : 'Afvalcategorie: A1';
    this.temp = ResultaatModel.getInstance();
    this.temp.processApiRespone(this.apiOut);
  }
}
