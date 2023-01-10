import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WasteProcessingApplication';
  myBool = false;

  button() {
    this.myBool = !this.myBool;
  }
}
