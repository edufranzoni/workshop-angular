import { Component, OnInit } from '@angular/core';
import { CadastroProduto } from '../cadastro-produto';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: CadastroProduto = new CadastroProduto();

  constructor() { }

  ngOnInit() {
  }

}
