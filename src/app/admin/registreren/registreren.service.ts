import { Router } from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {NavbarComponent} from "../../modules/core/components/navbar/navbar.component";
import {RegistrerenComponent} from "./registreren.component";

@Injectable()
export class RegistrerenService{
  constructor(private router: Router, private http: HttpClient){}


  selectRole: string = '';
  radioChangeHandler (event: any){
    this.selectRole = event.target.value;
  }







  Registreer() {
    // @ts-ignore
    var username = document.getElementById('username').value;
    // @ts-ignore
    var email = document.getElementById('email').value;


    var role = this.selectRole;

    const headers = { 'Content-Type': 'application/json','Authorization': 'Bearer '+sessionStorage.getItem('JWT') };
    let url =  "http://localhost:8080/api/auth/signup"
    this.http.post<{message: string}>(url,
      {
        "username": username,
        "email": email,
        "role":[role]
      },
      {headers}
    ).subscribe((responseData) => {


      this.router.navigate(['admin']);

    })


  }

}
