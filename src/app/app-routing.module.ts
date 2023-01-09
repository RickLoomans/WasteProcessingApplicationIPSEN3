import { HomeComponent } from './modules/home/components/home/home.component';
import { LayoutComponent } from './modules/core/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReststofVerwerkenComponent } from './reststof-verwerken/reststof-verwerken.component';
import { LoginComponent } from './login/login.component';
import {OrderListComponent} from "./order-list/order-list.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", component: LayoutComponent, children: [
    {path: "home", component: HomeComponent},
    {path: "reststofverwerken", component: ReststofVerwerkenComponent},
    {path: "login", component: LoginComponent},
      {path: "orders", component: OrderListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
