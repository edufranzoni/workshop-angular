import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';


@NgModule({
  declarations: [CatalogoComponent, ListaProdutosComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }
