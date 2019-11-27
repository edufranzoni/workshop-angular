import { Injectable } from '@angular/core';
import { ProdutoDto } from './produto-dto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Array<ProdutoDto> = [
    { id: 1, nome: 'Iphone XS Max', preco: 9999.99, imagem: 'assets/produtos/iphone.webp' },
    { id: 2, nome: 'Galaxy Note 10', preco: 4999.99, imagem: 'assets/produtos/galaxy.webp' }
  ];
  
  constructor() { }

  obterProdutos() : ProdutoDto[] {
    return this.produtos;
  } 
}
