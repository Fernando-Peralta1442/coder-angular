import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloParrafoComponent } from './titulo-parrafo/titulo-parrafo.component';
import { SubtitulosComponent } from './subtitulos/subtitulos.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloParrafoComponent,
    SubtitulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
