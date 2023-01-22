
import {Component, Output} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { ReststofVerwerkenComponent } from 'src/app/modules/reststof/components/reststof-verwerken/reststof-verwerken.component';
import {AfvalService} from "../../../../afval/afval.service";
import {AfvalModel} from "../../../../afval/afval.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  constructor(private router: Router, private http: HttpClient, private afvalService: AfvalService){}
  goHome(){
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT') };
    let url =  "http://localhost:8080/api/test/user"
    // @ts-ignore
    this.http.get<string>(url, {headers, responseType: 'text'}).subscribe((response) =>{
      // @ts-ignore
      if(response == 'User Content.'){
        this.router.navigate(['home']);
      }
    })


  }
  goRestStof(){
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT') };
    let url =  "http://localhost:8080/api/test/user"
    // @ts-ignore
    this.http.get<string>(url, {headers, responseType: 'text'}).subscribe((response) =>{
      // @ts-ignore
      if(response == 'User Content.'){
        this.router.navigate(['reststofverwerken']);
      }
    })


  }
  Logout(){
    this.router.navigate(['login']);
    sessionStorage.removeItem('JWT');
  }

  goLijst(){
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT') };
    let url =  "http://localhost:8080/api/test/admin"
    // @ts-ignore
    this.http.get<string>(url, {headers, responseType: 'text'}).subscribe((response) =>{
      // @ts-ignore
      if(response == 'Admin Board.'){
        this.router.navigate(['orderlijst']);
      }
    })

  @Output() afvalData: AfvalModel[] = []
  goAfval() {this.router.navigate(['afval']);


  }




}
