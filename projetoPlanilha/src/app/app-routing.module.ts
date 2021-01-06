import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanilhasComponent } from './planilhas/planilhas.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PlanilhasComponent,
    data: {title: 'Planilha Maker'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
