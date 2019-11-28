import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { IconestatusComponent } from './iconestatus/iconestatus.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';


@NgModule({
  declarations: [CatalogoComponent, ListaProdutosComponent, ListaDepartamentosComponent, IconestatusComponent, CadastroProdutoComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule    
  ],
  providers: [    
  ]
})
export class CatalogoModule { }
