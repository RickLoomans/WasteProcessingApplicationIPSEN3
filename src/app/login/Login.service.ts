import { Router } from "@angular/router";
import {NavbarComponent} from "../modules/core/components/navbar/navbar.component";
import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class LoginService {
  constructor(private router: Router, private http: HttpClient){}






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


      console.log(responseData.message);
      sessionStorage.setItem('JWT',responseData.message);
      sessionStorage.setItem("key",String(true));
      console.log(sessionStorage.getItem('JWT'))
      this.router.navigate(['home']);

    })
  }

  auth(): boolean{
     let key = false;
     const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT') };
     let url =  "http://localhost:8080/api/test/user"
     // @ts-ignore
     this.http.get<string>(url, {headers, responseType: 'text'}).subscribe((response) =>{
       console.log(response)
       // @ts-ignore
       if(response == 'User Content.'){
         key = true;
         return key;
       }
       else{
         //sessionStorage.removeItem('JWT');
         sessionStorage.setItem('key',String(false));
         this.router.navigate(['login']);
         key = false;
         return key;
       }
     })
     console.log(key);
    return key;


   }

   adminAuth(): boolean{
     let adminKey = false;
     const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT') };
     let url =  "http://localhost:8080/api/test/admin"
     // @ts-ignore
     this.http.get<string>(url, {headers, responseType: 'text'}).subscribe((response) =>{
       // @ts-ignore
       if(response == "Admin Board."){
         sessionStorage.setItem('adminKey',String(true));
         adminKey = true;
       }
       else{
         sessionStorage.setItem('adminKey',String(false));
         this.router.navigate(['home']);
         adminKey = false;
       }
     })
     return adminKey;
   }

}
