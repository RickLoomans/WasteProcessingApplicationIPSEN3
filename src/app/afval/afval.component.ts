import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { map } from "rxjs/operators"
import {AfvalModel} from "./afval.model";
import {AfvalService} from "./afval.service";
import {StofModel} from "../reststof-verwerken/stof-model";
import {ReplaySubject} from "rxjs";



@Component({
  selector: 'app-afval',
  templateUrl: './afval.component.html',
  styleUrls: ['./afval.component.scss']
})
export class AfvalComponent implements OnInit {
  @Output() onLijst = new EventEmitter<string>();
  nameCategorie: string = '';
  afvalData: AfvalModel[] = [];
  isFetching = false;
  naam1: string[] = [];
  gewicht: number = 0;
  metrage: number = 0;
  info$: ReplaySubject<AfvalModel[]> = new ReplaySubject<AfvalModel[]>(3)
  size: number = 0
  sizeArray: any = [];
  headers: string[] = ['Naam', 'Gewicht', 'Metrage']
  afvalAlgemeen = true;

  constructor(private http: HttpClient, private router: Router, private afvalService: AfvalService) {
  }

  ngOnInit() {
    this.isFetching = true;
    this.afvalService.fetchAfvalData().subscribe(data  => {
      this.isFetching = false;
      this.info$.next(data);
    });
    this.getData()

  }

  getData() {
    this.info$.subscribe(data => {
      this.afvalData = data;
      this.size = this.afvalData.length;
      this.sizeArray = new Array(this.size);
      for (let i = 0; i < this.size; i++) {
        this.sizeArray[i] = i
      }


    })

  }

  onZieLijst(categorie: string) {

    this.onLijst.emit(categorie)
    this.afvalAlgemeen = false;
    this.nameCategorie = categorie;
  }


}
