import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {VerwerkenModel} from "../reststof-verwerken/verwerken-model";
import {CategorieToevoegenModel} from "./categorie.toevoegen.model";

@Injectable({providedIn: 'root'})
export class CategorieToevoegenService {

  constructor(private http: HttpClient) { }

  voegCategorieToe(naam: string, eisen: string, kleur: string) {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    const postData : CategorieToevoegenModel = { naam: naam, eisen: eisen, kleur: kleur }
    return this.http.post('http://localhost:8080/categorie/add', postData, { responseType: 'text', headers});
  }

}
