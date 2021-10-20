import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarComponent } from './components/colaborador/criar/criar.component';
import { ListarComponent } from './components/colaborador/listar/listar.component';
import { DetalharComponent } from './components/colaborador/detalhar/detalhar.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarComponent,
    ListarComponent,
    DetalharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
