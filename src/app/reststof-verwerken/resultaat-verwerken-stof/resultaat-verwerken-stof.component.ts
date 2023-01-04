import { Component } from '@angular/core';
import {ResultaatModel} from "./resultaat-model";
import {ReststofVerwerkenComponent} from "../reststof-verwerken.component";

@Component({
  selector: 'app-resultaat-verwerken-stof',
  templateUrl: './resultaat-verwerken-stof.component.html',
  styleUrls: ['./resultaat-verwerken-stof.component.scss']
})
export class ResultaatVerwerkenStofComponent {
  resultaatModel: ResultaatModel | undefined;
  header:string = '';
  desc:string = '';

  ngOnInit(): void {
    this.resultaatModel = ResultaatModel.getInstance();
    this.header = this.resultaatModel.apiOutput
    this.desc = this.resultaatModel.description
  }


}
