import { HomeComponent } from './modules/home/components/home/home.component';
import { LayoutComponent } from './modules/core/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReststofVerwerkenComponent } from './reststof-verwerken/reststof-verwerken.component';
import {AfvalComponent} from "./afval/afval.component";
import {AfvallijstComponent} from "./afval/afvallijst/afvallijst.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", component: LayoutComponent, children: [
    {path: "home", component: HomeComponent},
    {path: "reststofverwerken", component: ReststofVerwerkenComponent},
      {path: "afval", component: AfvalComponent},
      {path: "afvallijst", component: AfvallijstComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
