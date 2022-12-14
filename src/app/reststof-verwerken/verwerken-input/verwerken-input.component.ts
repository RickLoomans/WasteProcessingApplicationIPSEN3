import { Component, EventEmitter, Output } from '@angular/core';
import {ResultaatModel} from "../resultaat-verwerken-stof/resultaat-model";
import { VerwerkenService } from '../verwerken-service';

@Component({
  selector: 'app-verwerken-input',
  templateUrl: './verwerken-input.component.html',
  styleUrls: ['./verwerken-input.component.scss']
})


export class VerwerkenInputComponent {
  @Output() data = new EventEmitter<{artikelnummer: string, klantId: number, metrage: number, magazijnId: number}>();
  artikelnummer: string = '';
  metrage: number = 0;
  klantId: number = 0;
  magazijnId: number = 0;

  constructor(private verwerkenService: VerwerkenService) {

  }

  ngOnInit() {
    this.metrage = Math.floor(Math.random() * (110 - 1 + 1)) + 1;
  }

  onVerwerken() {
    this.data.emit({artikelnummer: this.artikelnummer, klantId: this.klantId, metrage: this.metrage, magazijnId: this.magazijnId})
    console.log(this.artikelnummer)
    this.verwerkenService.verwerkReststof(this.artikelnummer, this.klantId, this.metrage, this.magazijnId)      
    .subscribe(responseData => {
      console.log(responseData)
      console.log(responseData.response)
    });;
  }

}
