import { Component } from '@angular/core';
import {ResultaatModel} from "./resultaat-model";
import {ReststofVerwerkenComponent} from "../reststof-verwerken.component";

@Component({
  selector: 'app-resultaat-verwerken-stof',
  templateUrl: './resultaat-verwerken-stof.component.html',
  styleUrls: ['./resultaat-verwerken-stof.component.scss']
})
export class ResultaatVerwerkenStofComponent {
  temp: ResultaatModel | undefined;
  header:string = '';
  desc:string = '';
  test = new ReststofVerwerkenComponent();

  ngOnInit(): void {
    this.temp = ResultaatModel.getInstance();
    this.header = this.temp.apiOutput
    this.desc = this.temp.description
    console.log(this.header);

  }


}
