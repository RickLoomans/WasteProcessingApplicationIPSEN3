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

  goLijst() {
    this.router.navigate(['orderlijst']);
  }
  goRestStof(){
    this.router.navigate(['reststofverwerken']);
  }
  goAfval() {
    this.router.navigate(['afval']);

  }

  goAdmin(){
    this.router.navigate(['admin'])
  }



}
