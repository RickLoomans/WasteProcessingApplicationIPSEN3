import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StofModel} from "./stof-model";

@Injectable({providedIn: 'root'})
export class StofService {

  constructor(private http: HttpClient) { }

  fetchStof(artikelnr: string) {
    artikelnr = 'AKEMI CS-4466-150';
    return this.http.get<{ response: StofModel }>('http://localhost:8080/stof?artikelnr='+ artikelnr)
  }

}
