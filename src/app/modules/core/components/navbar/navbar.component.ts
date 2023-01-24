
import {Component, Output} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { ReststofVerwerkenComponent } from 'src/app/modules/reststof/components/reststof-verwerken/reststof-verwerken.component';
import {AfvalService} from "../../../../afval/afval.service";
import {AfvalModel} from "../../../../afval/afval.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
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
  goRestStof(){if(this.authenticator.getkey()){this.router.navigate(['reststofverwerken'])}}
  Logout(){
    sessionStorage.removeItem('JWT');
    sessionStorage.removeItem('key');
    this.router.navigate(['login']);

  }

  goLijst(){if(this.authenticator.getkey()){this.router.navigate(['orderlijst'])}}
  goAfval(){if(this.authenticator.getAdminKey()){this.router.navigate(['afval'])}}

  getKey(): boolean{
    return sessionStorage.getItem('key') == 'true';
  }
  getAdminKey(): boolean{
    return sessionStorage.getItem('adminKey') == 'true';
  }







}
