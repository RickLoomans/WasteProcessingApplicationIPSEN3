import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CategorieModel} from "./categorie-model";

@Injectable({providedIn: 'root'})
export class CategorieService {

  constructor(private http: HttpClient) { }

  fetchCategory(categorieNaam: string) {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    return this.http.get<{ response: CategorieModel }>('http://localhost:8080/categorie/naam?naam='+ categorieNaam, {headers})
  }

}
