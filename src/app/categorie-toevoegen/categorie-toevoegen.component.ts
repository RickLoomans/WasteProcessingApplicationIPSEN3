import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CategorieToevoegenService} from "./categorie.toevoegen.service";
import {ReplaySubject} from "rxjs";
import {AfvalInfoModel} from "../afval/afvallijst/afvalinfo.model";

@Component({
  selector: 'app-categorie-toevoegen',
  templateUrl: './categorie-toevoegen.component.html',
  styleUrls: ['./categorie-toevoegen.component.scss'],
  animations: []
})
export class CategorieToevoegenComponent {
  info$: ReplaySubject<string> = new ReplaySubject<string>(1)
  message: string = "";

  constructor(private categorieToevoegenService: CategorieToevoegenService) {
  }


  onSubmit(form: NgForm) {
    this.categorieToevoegenService.voegCategorieToe(form.value.naam, form.value.eisen, form.value.kleur).subscribe(data => {
      this.info$.next(data)
    })
    this.getData();
    form.reset();
  }

  getData() {
    this.info$.subscribe(data => {
      this.message = data;
    })
    console.log(this.message);
  }

  onClosePopUp() {
    this.message = "";
  }

}
