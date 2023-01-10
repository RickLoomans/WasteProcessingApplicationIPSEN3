import {Component, ViewChild, Input, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import {ResultaatModel} from "./resultaat-verwerken-stof/resultaat-model";
import {VerwerkenInputComponent} from "./verwerken-input/verwerken-input.component";
import {VerwerkenService} from "./verwerken-service";

@Component({
  selector: 'app-reststof-verwerken',
  templateUrl: './reststof-verwerken.component.html',
  styleUrls: ['./reststof-verwerken.component.scss']
})

export class ReststofVerwerkenComponent {
  @Input()
  data!: { artikelnummer: string; metrage: number; klantId: number; magazijnId: number; };
  //@Output() data1: { artikelnummer: string; metrage: number; klantId: number; magazijnId: number; } | undefined;
  hasProcessed: boolean = false;
  private apiOut: string | undefined;
  private resultaatModel: ResultaatModel | undefined;

  constructor(private verwerkenService: VerwerkenService) {
  }


  @ViewChild(VerwerkenInputComponent) input!: VerwerkenInputComponent;

  verwerken() {
    this.resultaatModel = ResultaatModel.getInstance();
    this.resultaatModel.metrage = this.input.metrage;
    //ToDo deze code vervangen voor de Api request, hier was Marielle mee bezig dus miss hier haar veranderingen accepteren.

    this.apiOut = Math.random() > 0.5 ? 'magazijn' : 'retour';
    this.apiOut = Math.random() > 0.24 ? this.apiOut : 'Afvalcategorie: A1';
    this.resultaatModel.processApiRespone(this.apiOut);
    this.resultaatModel.artikelnr = this.input.artikelnummer;
    this.hasProcessed = true;
  }

  showLabel() {
    this.hasProcessed = false;
  }
}
