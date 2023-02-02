import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {AfvalInfoModel} from "./afvalinfo.model";
import {OrderModel} from "./order.model";
import * as jsonApi from "../../assets/api-requests.json";

@Injectable({providedIn: 'root'})
export class OrderlijstService {

  apiUrl = jsonApi;

  constructor(private http: HttpClient) {}

  fetchLijst() {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    return this.http.get<OrderModel[]>(this.apiUrl.baseurl + 'orderlijst', {headers});
  }




}
