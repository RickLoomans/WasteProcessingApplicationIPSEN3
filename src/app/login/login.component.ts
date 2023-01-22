import { Component } from '@angular/core';
import {LoginService} from "./Login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {
  error: string='';


  constructor(private Login: LoginService) {
  }

  public idk() {
    this.Login.login()
    this.error = "Wachtwoord/gebruikersnaam onjuist";
  }

}


