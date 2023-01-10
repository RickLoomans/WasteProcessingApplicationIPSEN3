import {Component, Input, OnInit} from '@angular/core';
import {AfvallijstService} from "./afvallijst.service";
import {ReplaySubject} from "rxjs";
import {AfvalModel} from "../afval.model";
import {AfvalInfoModel} from "./afvalinfo.model";


@Component({
  selector: 'app-afvallijst',
  templateUrl: './afvallijst.component.html',
  styleUrls: ['./afvallijst.component.scss']
})
export class AfvallijstComponent implements OnInit{
  @Input('categorie') name: string = '';
  info$: ReplaySubject<AfvalInfoModel[]> = new ReplaySubject<AfvalInfoModel[]>(8)
  afvallijstData: AfvalInfoModel[] = [];
  size: number = 0
  sizeArray: any = [];

  constructor(private afvallijstService: AfvallijstService) {
  }
  ngOnInit() {
    this.afvallijstService.fetchLijst(this.name).subscribe(data => {
      this.info$.next(data)
    })
    this.getData()

  }

  getData() {
    this.info$.subscribe(data => {
      this.afvallijstData = data;

      this.size = this.afvallijstData.length;
      this.sizeArray = new Array(this.size);
      for (let i = 0; i < this.size; i++) {
        this.sizeArray[i] = i
      }


    })

  }



}
