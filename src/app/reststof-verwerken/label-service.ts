import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as jsonApi from "../../assets/api-requests.json";

@Injectable({providedIn: 'root'})
export class LabelService {

  apiUrl = jsonApi;

  constructor(private http: HttpClient) { }

  fetchLabel(artikelnr: String) {
    const header = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};

    return this.http.get(this.apiUrl.baseurl + 'label/' + artikelnr, {
      headers: header,
      responseType: "blob"
      })
  }

}
