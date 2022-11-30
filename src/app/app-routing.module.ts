import { HomeComponent } from './modules/home/components/home/home.component';
import { LayoutComponent } from './modules/core/components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReststofVerwerkenComponent } from './modules/reststof/components/reststof-verwerken/reststof-verwerken.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", component: LayoutComponent, children: [
    {path: "home", component: HomeComponent},
    {path: "reststofverwerken", component: ReststofVerwerkenComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
