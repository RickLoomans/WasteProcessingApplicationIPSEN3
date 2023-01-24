import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {AfvalInfoModel} from "./afvalinfo.model";
import {OrderModel} from "./order.model";

@Injectable({providedIn: 'root'})
export class OrderlijstService {

  constructor(private http: HttpClient) {}

  fetchLijst() {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    return this.http.get<OrderModel[]>('http://localhost:8080/orderlijst', {headers});
  }




}
