import { Component } from '@angular/core';
import {ResultaatModel} from "./resultaat-verwerken-stof/resultaat-model";

@Component({
  selector: 'app-reststof-verwerken',
  templateUrl: './reststof-verwerken.component.html',
  styleUrls: ['./reststof-verwerken.component.scss']
})
export class ReststofVerwerkenComponent {
  hasProcessed:boolean = false;
  private apiOut: string | undefined;
  private resultaatModel: ResultaatModel | undefined;

  verwerken() {
    this.apiOut = Math.random() > 0.5 ? 'magazijn' : 'retour';
    this.apiOut = Math.random() > 0.24 ? this.apiOut : 'Afvalcategorie: A1';
    this.resultaatModel = ResultaatModel.getInstance();
    this.resultaatModel.processApiRespone(this.apiOut);
    this.hasProcessed = true;
  }

  showLabel() {
    this.hasProcessed = false;
  }
}
