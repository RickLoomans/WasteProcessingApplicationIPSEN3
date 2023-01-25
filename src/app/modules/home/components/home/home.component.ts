import { Component } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router){}
  goHome(){
    this.router.navigate(['']);
  }

  goCategorieToevoegen() {
    this.router.navigate(['categorietoevoegen']);
  }


  goRestStof(){
    this.router.navigate(['reststofverwerken']);
  }


  // TODO: greeting verander op basis van tijd en echte naam ophalen.
  public greeting = "Goedemiddag"
  public userFirstName = "Peter"

}
