import { ReststofModule } from './modules/reststof/reststof.module';
import { HomeModule } from './modules/home/home.module';
import { CoreModule } from './modules/core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';









import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReststofVerwerkenComponent } from './reststof-verwerken/reststof-verwerken.component';
import { ResultaatVerwerkenStofComponent } from './reststof-verwerken/resultaat-verwerken-stof/resultaat-verwerken-stof.component';
import { VerwerkenInputComponent } from './reststof-verwerken/verwerken-input/verwerken-input.component';
import { AfvalComponent } from './afval/afval.component';
import { AfvallijstComponent } from './afval/afvallijst/afvallijst.component';
import { ResultaatDetailsComponent } from './reststof-verwerken/resultaat-details/resultaat-details.component';
import { OrderlijstComponent } from './orderlijst/orderlijst.component';
import {NavbarComponent} from "./modules/core/components/navbar/navbar.component";
import {LoginService} from "./login/Login.service";


@NgModule({
  declarations: [
    AppComponent,
    ReststofVerwerkenComponent,
    ResultaatVerwerkenStofComponent,
    VerwerkenInputComponent,

    ResultaatDetailsComponent,
    VerwerkenInputComponent,
    AfvalComponent,
    AfvallijstComponent,
    LoginComponent,
    OrderlijstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    ReststofModule,
    HttpClientModule,

    FormsModule,

  ],
  providers: [NavbarComponent,
  LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
