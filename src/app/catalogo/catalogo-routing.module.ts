import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoComponent } from './catalogo.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'produtos', component: ListaProdutosComponent },
  { path: 'produtos/novo', component: CadastroProdutoComponent },
  { path: 'produtos/editar/:id', component: EditarProdutoComponent },
  { path: 'departamentos', component: ListaDepartamentosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
