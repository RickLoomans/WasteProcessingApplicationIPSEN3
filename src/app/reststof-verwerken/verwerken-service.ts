import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {VerwerkenModel} from "./verwerken-model";
import * as jsonApi from "../../assets/api-requests.json";

@Injectable({providedIn: 'root'})
export class VerwerkenService {

  apiUrl = jsonApi;

  constructor(private http: HttpClient) { }

  verwerkReststof(artikelnr: string, klantId: number,metrage: number) {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    const postData : VerwerkenModel = { artikelnr: artikelnr, klantId: klantId, metrage: metrage}
    return this.http.post<string[]>(this.apiUrl.baseurl + 'reststofverwerken', postData, {headers})
  }

}
