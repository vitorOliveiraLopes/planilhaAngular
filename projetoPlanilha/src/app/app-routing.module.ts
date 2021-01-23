import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanilhasAdicionarComponent } from './planilhas/planilhas-adicionar/planilhas-adicionar.component';
import { PlanilhasDetalheComponent } from './planilhas/planilhas-detalhe/planilhas-detalhe.component';
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
  },
  {
    path: 'task-detalhes/:id',
    component: PlanilhasDetalheComponent,
    data: {title: 'Detalhes da Task'}
  },
  {
    path: 'adicionar-tasks',
    component: PlanilhasAdicionarComponent,
    data: {title: 'Adicionar'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
