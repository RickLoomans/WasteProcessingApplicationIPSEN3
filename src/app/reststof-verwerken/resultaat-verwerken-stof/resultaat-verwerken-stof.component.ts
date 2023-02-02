import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resultaat-verwerken-stof',
  templateUrl: './resultaat-verwerken-stof.component.html',
  styleUrls: ['./resultaat-verwerken-stof.component.scss']
})
export class ResultaatVerwerkenStofComponent{

  @Input() resultOfProcessing: string[] = [];

}
