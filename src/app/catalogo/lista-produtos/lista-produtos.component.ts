import { Component, OnInit } from '@angular/core';
import { ProdutoDto } from '../produto-dto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: Array<ProdutoDto> = [
    { id: 1, nome: 'Iphone XS Max', preco: 9999.99 },
    { id: 2, nome: 'Galaxy Note 10', preco: 4999.99 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
