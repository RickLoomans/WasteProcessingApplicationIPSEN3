import {Component, OnInit, ViewChild} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {OrderlijstService} from "./orderlijst.service";
import {OrderModel} from "./order.model";
import {VerwerkenService} from "../reststof-verwerken/verwerken-service";
import {ResultaatDetailsComponent} from "../reststof-verwerken/resultaat-details/resultaat-details.component";

@Component({
  selector: 'app-orderlijst',
  templateUrl: './orderlijst.component.html',
  styleUrls: ['./orderlijst.component.scss'],
})

export class OrderlijstComponent implements OnInit{
  info$: ReplaySubject<OrderModel[]> = new ReplaySubject<OrderModel[]>(8)
  orderlijst: OrderModel[] = [];
  verwerkteStof: OrderModel = {gewicht: 0, klantid: 0, magazijnid: 0, metrage: 0, samenstelling: "", artikelnr: ""}
  size: number = 0
  sizeArray: any = [];
  responeData: string[] = [];
  hasProcessed: boolean = false;

  @ViewChild(ResultaatDetailsComponent, {static : true}) child : ResultaatDetailsComponent | undefined;


  constructor(private orderlijstService: OrderlijstService, private verwerkenService: VerwerkenService) {
  }

  ngOnInit() {
    this.orderlijstService.fetchLijst().subscribe(data => {
      this.info$.next(data)
    })
    this.getData()

  }

  onVerwerk(stof: OrderModel) {
    this.verwerkenService.verwerkReststof(stof.artikelnr, stof.klantid, stof.metrage, stof.magazijnid)
      .subscribe(responseData => {
        this.responeData = responseData;
        this.child?.getDetails(stof, this.responeData)
      });

    if (!this.hasProcessed) {
      this.hasProcessed = true;
    }

    this.orderlijst.splice(this.orderlijst.indexOf(stof), 1)
    this.updateOrderList();

  }

  getData() {
    this.info$.subscribe(data => {
      this.orderlijst = data;

      this.updateOrderList();

    })
  }

  updateOrderList() {
  this.size = this.orderlijst.length;
  this.sizeArray = new Array(this.size);
  for (let i = 0; i < this.size; i++) {
  this.sizeArray[i] = i
}
}

}
