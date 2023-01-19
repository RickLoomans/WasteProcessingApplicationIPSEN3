import { Router } from "@angular/router";
import {NavbarComponent} from "../modules/core/components/navbar/navbar.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {catchError, of} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable()
export class LoginService {
  constructor(private router: Router, private http: HttpClient, private navbar: NavbarComponent){}






  login() {
    // @ts-ignore
    var username = document.getElementById('username').value;
    // @ts-ignore
    var password = document.getElementById('password').value;

    const headers = { 'Content-Type': 'application/json' };
    let url =  "http://localhost:8080/api/auth/signin"
    this.http.post<{message: string}>(url,
      {
        "username": username,
        "password": password
      },
      {headers}
    ).subscribe((responseData) => {


      sessionStorage.setItem('JWT',responseData.message);
      this.navbar.goHome();

    })
  }

}
