import {Component, ViewChild} from '@angular/core';
import {ResultaatModel} from "./resultaat-verwerken-stof/resultaat-model";
import {VerwerkenInputComponent} from "./verwerken-input/verwerken-input.component";

@Component({
  selector: 'app-reststof-verwerken',
  templateUrl: './reststof-verwerken.component.html',
  styleUrls: ['./reststof-verwerken.component.scss']
})
export class ReststofVerwerkenComponent {
  hasProcessed:boolean = false;
  private apiOut: string | undefined;
  private resultaatModel: ResultaatModel | undefined;

  @ViewChild(VerwerkenInputComponent) input!: VerwerkenInputComponent;

  verwerken() {
    this.resultaatModel = ResultaatModel.getInstance();
    console.log(this.input.metrage);
    this.resultaatModel.metrage = this.input.metrage;

    this.apiOut = Math.random() > 0.5 ? 'magazijn' : 'retour';
    this.apiOut = Math.random() > 0.24 ? this.apiOut : 'Afvalcategorie: A1';
    this.resultaatModel.processApiRespone(this.apiOut);
    this.hasProcessed = true;
  }

  showLabel() {
    this.hasProcessed = false;
  }
}
