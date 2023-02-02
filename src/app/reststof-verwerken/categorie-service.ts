import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CategorieModel} from "./categorie-model";
import * as jsonApi from "../../assets/api-requests.json";

@Injectable({providedIn: 'root'})
export class CategorieService {

  apiUrl = jsonApi;

  constructor(private http: HttpClient) { }

  fetchCategory(categorieNaam: string) {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    return this.http.get<{ response: CategorieModel }>(this.apiUrl.baseurl + 'categorie/naam?naam='+ categorieNaam, {headers})
  }

}
