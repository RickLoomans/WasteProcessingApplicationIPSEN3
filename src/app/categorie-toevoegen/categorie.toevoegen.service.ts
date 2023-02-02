import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CategorieToevoegenModel} from "./categorie.toevoegen.model";
import * as jsonApi from "../../assets/api-requests.json";

@Injectable({providedIn: 'root'})
export class CategorieToevoegenService {

  apiUrl = jsonApi;

  constructor(private http: HttpClient) { }

  voegCategorieToe(naam: string, eisen: string, kleur: string) {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    const postData : CategorieToevoegenModel = { naam: naam, eisen: eisen, kleur: kleur }
    return this.http.post(this.apiUrl.baseurl + 'categorie/add', postData, { responseType: 'text', headers});
  }

}
