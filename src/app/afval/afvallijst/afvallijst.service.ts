import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AfvalInfoModel} from "./afvalinfo.model";

@Injectable({providedIn: 'root'})
export class AfvallijstService {

  constructor(private http: HttpClient) {}

  fetchLijst(naam: string) {
    return this.http.get<AfvalInfoModel[]>('http://localhost:8080/afvallijst?naam='+ naam)
  }




}
