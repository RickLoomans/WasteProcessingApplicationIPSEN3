import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import {NavbarComponent} from "../modules/core/components/navbar/navbar.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient, private navbar: NavbarComponent){}
  jwt: string = '';




  login() {
    // @ts-ignore
    var username = document.getElementById('username').value;
    // @ts-ignore
    var password = document.getElementById('password').value;

    const headers = { 'Content-Type': 'application/json' };
    let url =  "http://localhost:8080/api/auth/signin"
    // @ts-ignore
    this.http.post<Poep>(url,
      {
        "username": username,
        "password": password
      },
      {headers}
     ).subscribe(responseData => {
       console.log(responseData);

      sessionStorage.setItem('JWT',responseData.message);
      this.navbar.goHome();

    })
    console.log(username)
    console.log("done"
)
  }

}


