import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';


@NgModule({
  declarations: [CatalogoComponent, ListaProdutosComponent, ListaDepartamentosComponent],
  imports: [
    CommonModule,
    CatalogoRoutingModule    
  ],
  providers: [    
  ]
})
export class CatalogoModule { }
