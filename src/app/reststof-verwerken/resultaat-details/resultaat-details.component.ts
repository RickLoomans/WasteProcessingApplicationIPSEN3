import { Component } from '@angular/core';
import {ResultaatModel} from "../resultaat-verwerken-stof/resultaat-model";
import {ReststofVerwerkenComponent} from "../reststof-verwerken.component";

@Component({
  selector: 'app-resultaat-details',
  templateUrl: './resultaat-details.component.html',
  styleUrls: ['./resultaat-details.component.scss']
})
export class ResultaatDetailsComponent {
  resultaatModel: ResultaatModel | undefined;
  metrage:number = 3;

  ngOnInit(): void {
    this.resultaatModel = ResultaatModel.getInstance();
    this.metrage = this.resultaatModel.metrage
  }
}
