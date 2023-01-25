import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class LabelService {

  constructor(private http: HttpClient) { }

  fetchLabel(artikelnr: String) {
    const header = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};

    return this.http.get('http://localhost:8080/label/'+ artikelnr, {
      headers: header,
      responseType: "blob"
      })
  }

}
