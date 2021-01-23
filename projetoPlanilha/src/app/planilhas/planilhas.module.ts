import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

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
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ]
})

export class PlanilhasModule {}