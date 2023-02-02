import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "../../../../login/Login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  date: string = '';

  constructor(private router: Router, private authenticator: LoginService){}

  goCategorieToevoegen() {
    if(this.authenticator.getkey()){this.router.navigate(['categorietoevoegen'])}
  }

  ngOnInit() {
    this.date = new Date().toDateString()
  }

  goRestStof(){
    if(this.authenticator.getkey()){this.router.navigate(['orderlijst'])}
  }
  getKey(): boolean{
    return sessionStorage.getItem('key') == 'true';
  }
  getAdminKey(): boolean{
    return sessionStorage.getItem('adminKey') == 'true';
  }
  goAfval(){if(this.authenticator.getkey()){this.router.navigate(['afval'])}}

  goAdmin(){if(this.authenticator.getAdminKey()){this.router.navigate(['admin'])}}

  Logout(){
    sessionStorage.removeItem('JWT');
    sessionStorage.removeItem('key');
    sessionStorage.removeItem('adminKey');
    this.router.navigate(['login']);

  }

}
