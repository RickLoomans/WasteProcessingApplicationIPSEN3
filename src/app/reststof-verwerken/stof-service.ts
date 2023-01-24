import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StofModel} from "./stof-model";

@Injectable({providedIn: 'root'})
export class StofService {

  constructor(private http: HttpClient) { }

  fetchStof(artikelnr: string) {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    return this.http.get<{ response: StofModel }>('http://localhost:8080/stof?artikelnr='+ artikelnr, {headers})
  }

}
