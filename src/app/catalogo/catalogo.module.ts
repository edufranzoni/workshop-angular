import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { IconeStatusComponent } from './icone-status/icone-status.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ControlMessages } from './control-messages.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

@NgModule({
  declarations: [CatalogoComponent, ListaProdutosComponent, ListaDepartamentosComponent, IconeStatusComponent, CadastroProdutoComponent, ControlMessages, EditarProdutoComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    ReactiveFormsModule
  ]
})
export class CatalogoModule { }
