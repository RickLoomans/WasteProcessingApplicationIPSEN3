import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AfvalModel} from "./afval.model";

@Injectable({providedIn: 'root'})
export class AfvalService {


  constructor(private http: HttpClient) { }

  fetchAfvalData() {
    return this.http.get<AfvalModel[]>('http://localhost:8080/afvalinzicht')
  }
}
