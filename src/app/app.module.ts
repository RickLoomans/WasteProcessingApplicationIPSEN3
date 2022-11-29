import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReststofVerwerkenComponent } from './reststof-verwerken/reststof-verwerken.component';
import { ResultaatVerwerkenStofComponent } from './reststof-verwerken/resultaat-verwerken-stof/resultaat-verwerken-stof.component';
import { VerwerkenInputComponent } from './reststof-verwerken/verwerken-input/verwerken-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ReststofVerwerkenComponent,
    ResultaatVerwerkenStofComponent,
    VerwerkenInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
