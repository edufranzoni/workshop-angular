import { Component, OnInit } from '@angular/core';
import { ProdutoDto } from '../produto-dto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: ProdutoDto[] = [];
  carregando: boolean = false;

  constructor(private produtoService: ProdutoService) { }

  async ngOnInit() {
    // Usando async/await com promises
    try {
      this.carregando = true;
      this.produtos = await this.produtoService.obter().toPromise();
    } catch (error) {
      console.log(error);
    } finally {
      this.carregando = false;
    }

    // Usando observables
    //   let produtosObservable = this.produtoService.obter();

    //   produtosObservable
    //     .subscribe(produtos => {
    //       this.produtos = produtos
    //     }, error => {
    //       console.error(error);
    //     })

    //   produtosObservable
    //     .subscribe(produtos => {
    //       console.table(produtos);
    //     });
  }

}
