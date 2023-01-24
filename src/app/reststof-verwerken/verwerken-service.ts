import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {VerwerkenModel} from "./verwerken-model";

@Injectable({providedIn: 'root'})
export class VerwerkenService {

  constructor(private http: HttpClient) { }

  verwerkReststof(artikelnr: string, klantId: number,metrage: number) {
    const headers = { 'Authorization': 'Bearer '+sessionStorage.getItem('JWT')};
    const postData : VerwerkenModel = { artikelnr: artikelnr, klantId: klantId, metrage: metrage}
    return this.http.post<string[]>('http://localhost:8080/reststofverwerken', postData, {headers})
  }

}
