import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/shared/header/header.component';
import { PlanilhasModule } from 'src/app/planilhas/planilhas.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlanilhasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
