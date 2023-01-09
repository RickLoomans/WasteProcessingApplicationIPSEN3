import {Component, Output} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { ReststofVerwerkenComponent } from 'src/app/modules/reststof/components/reststof-verwerken/reststof-verwerken.component';
import {AfvalService} from "../../../../afval/afval.service";
import {AfvalModel} from "../../../../afval/afval.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  @Output() afvalData: AfvalModel[] = []
  constructor(private router: Router, private afvalService: AfvalService){}
  goHome(){
    this.router.navigate(['']);
  }
  goRestStof(){
    this.router.navigate(['reststofverwerken']);
  }
  goAfval() {
    //this.afvalService.fetchAfvalData().subscribe(data  => {
      //const keys: String[] = Object.keys(data)
      //console.log(keys);
     // console.log(data[0]);
     // this.afvalData = data;
   // });
    this.router.navigate(['afval']);

  }



}
