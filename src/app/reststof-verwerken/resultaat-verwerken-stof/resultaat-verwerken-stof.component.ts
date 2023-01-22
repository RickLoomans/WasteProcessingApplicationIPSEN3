import {Component, Input, OnInit} from '@angular/core';
import {ResultaatModel} from "./resultaat-model";
import {ReststofVerwerkenComponent} from "../reststof-verwerken.component";

@Component({
  selector: 'app-resultaat-verwerken-stof',
  templateUrl: './resultaat-verwerken-stof.component.html',
  styleUrls: ['./resultaat-verwerken-stof.component.scss']
})
export class ResultaatVerwerkenStofComponent implements OnInit{
  header:string = '';
  orderNummer:string = '';
  desc:string = '';

  @Input() apiOutVerwerken: string[] = [];

  ngOnInit(): void {
    this.header = this.apiOutVerwerken[0]
    this.orderNummer = this.apiOutVerwerken[1]
  }


}
