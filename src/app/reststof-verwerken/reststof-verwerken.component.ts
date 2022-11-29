import { Component } from '@angular/core';
import {ResultaatModel} from "./resultaat-verwerken-stof/resultaat-model";

@Component({
  selector: 'app-reststof-verwerken',
  templateUrl: './reststof-verwerken.component.html',
  styleUrls: ['./reststof-verwerken.component.scss']
})
export class ReststofVerwerkenComponent {
  apiOut:string = '';
  temp: ResultaatModel | undefined;
  myVar = false;

  verwerken() {
    this.apiOut = Math.random() > 0.5 ? 'magazijn' : 'retour';
    this.apiOut = Math.random() > 0.24 ? this.apiOut : 'Afvalcategorie: A1';
    this.temp = ResultaatModel.getInstance();
    this.temp.processApiRespone(this.apiOut);
    this.myVar = !this.myVar;
  }
}
