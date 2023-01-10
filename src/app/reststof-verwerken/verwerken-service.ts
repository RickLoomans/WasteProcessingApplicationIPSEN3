import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {VerwerkenModel} from "./verwerken-model";

@Injectable({providedIn: 'root'})
export class VerwerkenService {

  constructor(private http: HttpClient) { }

  verwerkReststof(artikelnr: string, klantId: number,metrage: number, magazijnId:number) {
    const postData : VerwerkenModel = { artikelnr: artikelnr, klantId: klantId, metrage: metrage, magazijnId: magazijnId}


    this.http.post<{ response: string[] }>('http://localhost:8080/reststofverwerken', postData
    )
      .subscribe(responseData => {

      });
  }

}
