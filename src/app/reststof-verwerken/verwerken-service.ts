import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {VerwerkenModel} from "./verwerken-model";

@Injectable({providedIn: 'root'})
export class VerwerkenService {

  constructor(private http: HttpClient) { }

  verwerkReststof(artikelnr: string, klantId: number, magazijnId: number, metrage: number) {
    const postData : VerwerkenModel = { artikelnr: artikelnr, klantId: klantId, magazijnId: magazijnId, metrage: metrage}
    console.log(postData)

    this.http.post<{ response: string[] }>('http://localhost:8080/reststofverwerken', postData
    )
      .subscribe(responseData => {
        console.log(responseData.response[0])
      });
  }

}
