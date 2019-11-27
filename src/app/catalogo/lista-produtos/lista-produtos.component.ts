import { Component, OnInit } from '@angular/core';
import { ProdutoDto } from '../produto-dto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: Array<ProdutoDto> = [];
  carregando: boolean = false;

  constructor(private produtoService: ProdutoService) { }

  async ngOnInit() {

    // this.produtoService.obterProdutos().subscribe(produtos => {
    //   this.produtos = produtos;
    // }, 
    // error => { console.error(error); 
    // });
    try{
      this.carregando = true;
      this.produtos = await this.produtoService.obterProdutos().toPromise();
    } catch(error){
      console.log(error);
    }finally{
      this.carregando = false;
    }
    
  }

}
