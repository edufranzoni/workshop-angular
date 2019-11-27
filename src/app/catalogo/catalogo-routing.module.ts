import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoComponent } from './catalogo.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';

const routes: Routes = 
[
  { path: '', component: CatalogoComponent },
  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'departamentos', component: ListaDepartamentosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
