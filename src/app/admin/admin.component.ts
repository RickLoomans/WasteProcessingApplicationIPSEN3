import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {LoginService} from "../login/Login.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private router: Router, private authenticator: LoginService) {
  }

  goRegistreren(){if(this.authenticator.getAdminKey()){this.router.navigate(['registeren'])}}
  getAdminKey(): boolean{
    return sessionStorage.getItem('adminKey') == 'true';
  }
}
