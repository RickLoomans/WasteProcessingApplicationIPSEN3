import {Injectable, Input, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {VerwerkenModel} from "./verwerken-model";


@Injectable({providedIn: 'root'})
export class VerwerkenService implements OnInit{
 // @Input() data: {artikelnummer: string; metrage: number; klantId: number; magazijnId: number};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  verwerkReststof(artikelnr: string, klantId: number, metrage: number, magazijnId: number) {
    const postData : VerwerkenModel = {artikelnr: artikelnr, klantId: klantId, metrage: metrage, magazijnId: magazijnId}
    console.log(magazijnId);
    return this.http.post<{ response: string[] }>('http://localhost:8080/reststofverwerken', postData)
  }

}
