import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WasteProcessingApplication';
  myVar = false;

 // constructor(private http: HttpClient, pr) {

 // }


  button() {
    this.myVar = !this.myVar;
  }

  //onCreatePost() {
   // this.verwerken
  //}


}
