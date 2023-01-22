import { ReststofModule } from './modules/reststof/reststof.module';
import { HomeModule } from './modules/home/home.module';
import { CoreModule } from './modules/core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import {NavbarComponent} from "./modules/core/components/navbar/navbar.component";
import {LoginService} from "./login/Login.service";
import {OrderListComponent} from "./order-list/order-list.component";
import {VerwerkenInputComponent} from "./reststof-verwerken/verwerken-input/verwerken-input.component";
import {
  ResultaatVerwerkenStofComponent
} from "./reststof-verwerken/resultaat-verwerken-stof/resultaat-verwerken-stof.component";
import {ReststofVerwerkenComponent} from "./reststof-verwerken/reststof-verwerken.component";

@NgModule({
  declarations: [
    AppComponent,
    ReststofVerwerkenComponent,
    ResultaatVerwerkenStofComponent,
    VerwerkenInputComponent,
    LoginComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    ReststofModule,
    HttpClientModule,
  ],
  providers: [NavbarComponent,
  LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
