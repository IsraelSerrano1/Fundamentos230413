import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraDivisasComponent } from './calculadora-divisas/calculadora-divisas.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CalculadoraDivisasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
