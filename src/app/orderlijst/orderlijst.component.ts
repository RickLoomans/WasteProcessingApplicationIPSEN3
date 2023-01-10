import {Component, Input, OnInit} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {StofModel} from "../reststof-verwerken/stof-model";
import {OrderlijstService} from "./orderlijst.service";
import {OrderModel} from "./order.model";
import {VerwerkenModel} from "../reststof-verwerken/verwerken-model";
import {VerwerkenService} from "../reststof-verwerken/verwerken-service";

@Component({
  selector: 'app-orderlijst',
  templateUrl: './orderlijst.component.html',
  styleUrls: ['./orderlijst.component.scss']
})

export class OrderlijstComponent implements OnInit{
  info$: ReplaySubject<OrderModel[]> = new ReplaySubject<OrderModel[]>(8)
  orderlijst: OrderModel[] = [];
  size: number = 0
  sizeArray: any = [];


  constructor(private orderlijstService: OrderlijstService, private verwerkenService: VerwerkenService) {
  }
  ngOnInit() {
    this.orderlijstService.fetchLijst().subscribe(data => {
      this.info$.next(data)
      console.log(data);
    })
    this.getData()

  }

  onVerwerk(stof: OrderModel) {

    this.verwerkenService.verwerkReststof(stof.artikelnr, stof.klantid, stof.metrage, stof.magazijnid)
      .subscribe(responseData => {
        console.log(responseData)
        console.log(responseData)
      });
  }
  getData() {
    this.info$.subscribe(data => {
      this.orderlijst = data;

      this.size = this.orderlijst.length;
      this.sizeArray = new Array(this.size);
      for (let i = 0; i < this.size; i++) {
        this.sizeArray[i] = i
      }


    })

  }



}
