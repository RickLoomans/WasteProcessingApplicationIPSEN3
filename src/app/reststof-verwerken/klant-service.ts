import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StofModel} from "./stof-model";

@Injectable({providedIn: 'root'})
export class KlantService {

  constructor(private http: HttpClient) { }

  fetchKlant(klantId: number) {
    return this.http.get<{ response: StofModel }>('http://localhost:8080/klant?id='+ klantId)
  }

}
