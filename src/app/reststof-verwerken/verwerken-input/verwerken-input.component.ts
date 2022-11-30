import { Component } from '@angular/core';
import {ResultaatModel} from "../resultaat-verwerken-stof/resultaat-model";

@Component({
  selector: 'app-verwerken-input',
  templateUrl: './verwerken-input.component.html',
  styleUrls: ['./verwerken-input.component.scss']
})

export class VerwerkenInputComponent {
  artikelnummer = '';
  klantId = '';
  metrage: number = 0;
  magazijnId = '';

  ngOnInit() {
    this.metrage = Math.floor(Math.random() * (110 - 1 + 1)) + 1;
  }

}
