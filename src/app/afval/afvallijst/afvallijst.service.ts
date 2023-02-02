import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AfvalInfoModel} from "./afvalinfo.model";
import * as jsonApi from "../../../assets/api-requests.json";

@Injectable({providedIn: 'root'})
export class AfvallijstService {

  apiUrl = jsonApi;

  constructor(private http: HttpClient) {}

  fetchLijst(naam: string) {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    return this.http.get<AfvalInfoModel[]>(this.apiUrl.baseurl + 'afvallijst?naam='+ naam ,{headers})
  }




}
