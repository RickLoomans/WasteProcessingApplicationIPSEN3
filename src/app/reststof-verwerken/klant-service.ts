import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StofModel} from "./stof-model";
import * as jsonApi from "../../assets/api-requests.json";

@Injectable({providedIn: 'root'})
export class KlantService {

  apiUrl = jsonApi;

  constructor(private http: HttpClient) { }

  fetchKlant(klantId: number) {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    return this.http.get<{ response: StofModel }>( this.apiUrl.baseurl + 'klant?id='+ klantId, {headers})
  }

}
