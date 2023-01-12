import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {NavbarComponent} from "../modules/core/components/navbar/navbar.component";
import {LoginService} from "./Login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent {
  constructor(private Login: LoginService) {
  }

  public idk() {
    this.Login.login()
  }

}


