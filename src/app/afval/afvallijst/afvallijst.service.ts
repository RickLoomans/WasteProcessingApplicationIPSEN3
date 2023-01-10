import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StofModel} from "../../reststof-verwerken/stof-model";
import {AfvalService} from "../afval.service";
import {AfvalInfoModel} from "./afvalinfo.model";
import {ReplaySubject} from "rxjs";
import {AfvalModel} from "../afval.model";

@Injectable({providedIn: 'root'})
export class AfvallijstService {

  constructor(private http: HttpClient) {}

  fetchLijst(naam: string) {
    return this.http.get<AfvalInfoModel[]>('http://localhost:8080/afvallijst?naam='+ naam)
  }




}
