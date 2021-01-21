import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PlanilhasAdicionarComponent } from './planilhas-adicionar/planilhas-adicionar.component';
import { PlanilhasDetalheComponent } from './planilhas-detalhe/planilhas-detalhe.component';
import { PlanilhasComponent } from './planilhas.component';

@NgModule({
    declarations: [
        PlanilhasComponent,
        PlanilhasDetalheComponent,
        PlanilhasAdicionarComponent
    ],
    exports: [
        PlanilhasComponent,
        PlanilhasDetalheComponent,
        PlanilhasAdicionarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class PlanilhasModule {}