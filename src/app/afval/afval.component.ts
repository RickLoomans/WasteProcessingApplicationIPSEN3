import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-afval',
  templateUrl: './afval.component.html',
  styleUrls: ['./afval.component.scss']
})
export class AfvalComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit() {

  }


  onZieLijst(categorie: string) {
    console.log("click" + categorie);
    this.router.navigate(['afvallijst']);
  }

}
