import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarColaboradorComponent } from './components/criar-colaborador/criar-colaborador.component';
import { DetalharColaboradorComponent } from './components/detalhar-colaborador/detalhar-colaborador.component';
import { ListarColaboradorComponent } from './components/listar-colaborador/listar-colaborador.component';

const routes: Routes = [
  { path: '', redirectTo: 'colaboradores', pathMatch: 'full'},
  { path: 'colaboradores', component: ListarColaboradorComponent },
  { path: 'colaboradores/:id', component: DetalharColaboradorComponent },
  { path: 'criar', component: CriarColaboradorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
