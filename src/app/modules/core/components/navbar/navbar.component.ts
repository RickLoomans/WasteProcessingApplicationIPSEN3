import { Component } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { ReststofVerwerkenComponent } from 'src/app/modules/reststof/components/reststof-verwerken/reststof-verwerken.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  constructor(private router: Router){}
  goHome(){
    this.router.navigate(['']);
  }
  goRestStof(){
    this.router.navigate(['reststofverwerken']);
  }
  goAfval() {
    this.router.navigate(['afval']);
  }



}
