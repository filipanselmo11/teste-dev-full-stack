import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarComponent } from './components/colaborador/criar/criar.component';
import { DetalharComponent } from './components/colaborador/detalhar/detalhar.component';
import { ListarComponent } from './components/colaborador/listar/listar.component';
const routes: Routes = [
  { path: '', redirectTo: 'colaboradores', pathMatch: 'full'},
  { path: 'colaboradores', component: ListarComponent },
  { path: 'colaboradores/:id', component: DetalharComponent },
  { path: 'criar', component: CriarComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
