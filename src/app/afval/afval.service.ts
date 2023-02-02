import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AfvalModel} from "./afval.model";
import * as jsonApi from "../../assets/api-requests.json";

@Injectable({providedIn: 'root'})
export class AfvalService {

  apiUrl = jsonApi;

  constructor(private http: HttpClient) { }

  fetchAfvalData() {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    return this.http.get<AfvalModel[]>(this.apiUrl.baseurl + 'afvalinzicht',{headers})
  }
}
