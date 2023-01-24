import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StofModel} from "./stof-model";

@Injectable({providedIn: 'root'})
export class LabelService {

  constructor(private http: HttpClient) { }

  fetchLabel(artikelnr: String) {
    return this.http.get('http://localhost:8080/label/'+ artikelnr, { responseType: 'blob' })
  }

}
