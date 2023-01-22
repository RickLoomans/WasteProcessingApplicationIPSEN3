import { Component } from '@angular/core';

import {RegistrerenService} from "./registreren.service";
import {NavbarComponent} from "../../modules/core/components/navbar/navbar.component";

@Component({
  selector: 'app-registreren',
  templateUrl: './registreren.component.html',
  styleUrls: ['./registreren.component.scss'],
  providers: [RegistrerenService, NavbarComponent]
})
export class RegistrerenComponent {


  roles: any = [
    'user',
    'mod',
    'admin'
  ];
  constructor(private register: RegistrerenService) {
  }


  public registrerenGebruiker(){
    this.register.Registreer();
  }

  radChange($event: Event) {
    this.register.radioChangeHandler($event)
  }
}
