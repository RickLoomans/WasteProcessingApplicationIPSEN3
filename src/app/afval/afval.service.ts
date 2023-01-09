import {HttpClient} from "@angular/common/http";
import {StofModel} from "../reststof-verwerken/stof-model";
import {Injectable} from "@angular/core";
import {AfvalModel} from "./afval.model";
import {BehaviorSubject, Observable, tap} from "rxjs";
import { map } from "rxjs/operators"
import {AfvalComponent} from "./afval.component";

@Injectable({providedIn: 'root'})
export class AfvalService {


  constructor(private http: HttpClient) { }

  fetchAfvalData() {
    return this.http.get<AfvalModel[]>('http://localhost:8080/afvalinzicht')
  }
}
