import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // TODO: greeting verander op basis van tijd en echte naam ophalen.
  public greeting = "Goedemiddag"
  public userFirstName = "Peter"

}
