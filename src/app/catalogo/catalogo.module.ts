import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { IconestatusComponent } from './iconestatus/iconestatus.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ControlMessagesComponent } from './control-messages.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ControlMessagesComponent, CatalogoComponent, ListaProdutosComponent, ListaDepartamentosComponent, IconestatusComponent, CadastroProdutoComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [    
  ]
})
export class CatalogoModule { }
