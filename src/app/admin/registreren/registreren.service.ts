import { Router } from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as jsonApi from "../../../assets/api-requests.json";

@Injectable()
export class RegistrerenService{

  apiUrl = jsonApi;

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
    let url =  this.apiUrl.baseurl + "api/auth/signup"
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
