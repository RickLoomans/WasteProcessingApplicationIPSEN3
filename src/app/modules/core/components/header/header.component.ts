import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public userType = "";

  ngOnInit() {
    if(sessionStorage.getItem('adminKey') == 'true') {
      this.userType = "Admin";
    } else {
      this.userType = "User";
    }

  }

}
