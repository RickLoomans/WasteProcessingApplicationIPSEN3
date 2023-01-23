import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {LoginService} from "../../../../login/Login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(private router: Router, private authenticator: LoginService){}

  goRestStof(){
     if(this.authenticator.auth() == true){
       console.log('hoi');
       this.router.navigate(['reststofverwerken']);}
  }
  getKey(): boolean{

    console.log(sessionStorage.getItem('JWT'))
    console.log(sessionStorage.getItem('key'))
    if(sessionStorage.getItem('key') == 'true'){
      return true;
    }
    else{
      return false;
    }


  }


  // TODO: greeting verander op basis van tijd en echte naam ophalen.
  public greeting = "Goedemiddag"
  public userFirstName = "Peter"

}
