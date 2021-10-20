import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarColaboradorComponent } from './components/criar-colaborador/criar-colaborador.component';
import { DetalharColaboradorComponent } from './components/detalhar-colaborador/detalhar-colaborador.component';
import { ListarColaboradorComponent } from './components/listar-colaborador/listar-colaborador.component';


@NgModule({
  declarations: [
    AppComponent,
    CriarColaboradorComponent,
    DetalharColaboradorComponent,
    ListarColaboradorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
