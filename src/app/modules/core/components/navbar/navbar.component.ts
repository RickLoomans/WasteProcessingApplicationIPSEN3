
import {Component, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AfvalService} from "../../../../afval/afval.service";
import {AfvalModel} from "../../../../afval/afval.model";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../../../login/Login.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  @Output() afvalData: AfvalModel[] = []
  constructor(private router: Router, private http: HttpClient, private afvalService: AfvalService, private authenticator: LoginService){}
  goHome(){if(this.authenticator.getkey()){this.router.navigate(['home'])}}
  Logout(){
    sessionStorage.removeItem('JWT');
    sessionStorage.removeItem('key');
    sessionStorage.removeItem('adminKey');
    this.router.navigate(['login']);
  }

  goLijst(){if(this.authenticator.getkey()){this.router.navigate(['orderlijst'])}}
  goAfval(){if(this.authenticator.getkey()){this.router.navigate(['afval'])}}

  goCatagorie(){if(this.authenticator.getkey()){this.router.navigate(['categorietoevoegen'])}}

  getKey(): boolean{
    return sessionStorage.getItem('key') == 'true';
  }
  getAdminKey(): boolean{
    return sessionStorage.getItem('adminKey') == 'true';
  }

  goAdmin(){if(this.authenticator.getAdminKey()){this.router.navigate(['admin'])}}



}
