import { ReststofModule } from './modules/reststof/reststof.module';
import { HomeModule } from './modules/home/home.module';
import { CoreModule } from './modules/core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { HttpClient  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReststofVerwerkenComponent } from './reststof-verwerken/reststof-verwerken.component';
import { ResultaatVerwerkenStofComponent } from './reststof-verwerken/resultaat-verwerken-stof/resultaat-verwerken-stof.component';
import { VerwerkenInputComponent } from './reststof-verwerken/verwerken-input/verwerken-input.component';
import { AfvalComponent } from './afval/afval.component';
import { AfvallijstComponent } from './afval/afvallijst/afvallijst.component';
import { ResultaatDetailsComponent } from './reststof-verwerken/resultaat-details/resultaat-details.component';
import { OrderlijstComponent } from './orderlijst/orderlijst.component';
import { RegistrerenComponent } from './admin/registreren/registreren.component';
import { AdminComponent } from './admin/admin.component';
import {RegistrerenService} from "./admin/registreren/registreren.service";
import {NavbarComponent} from "./modules/core/components/navbar/navbar.component";


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
    OrderlijstComponent,
    RegistrerenComponent,
    AdminComponent
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
  providers: [RegistrerenService],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
