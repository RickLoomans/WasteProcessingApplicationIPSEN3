import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {VerwerkenModel} from "./verwerken-model";

@Injectable({providedIn: 'root'})
export class VerwerkenService {

  constructor(private http: HttpClient) { }

  verwerkReststof(artikelnr: string, klantId: number,metrage: number, magazijnId:number) {
    const postData : VerwerkenModel = { artikelnr: artikelnr, klantId: klantId, metrage: metrage, magazijnId: magazijnId}
    console.log("data: " + artikelnr);
    console.log(klantId)
    console.log(metrage)
    console.log(magazijnId)

    this.http.post<any>('http://localhost:8080/reststofverwerken', postData
    )
      .subscribe(responseData => {
        console.log(responseData)
      });
  }

}
