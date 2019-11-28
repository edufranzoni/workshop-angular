import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutoDto } from './produto-dto';
import { CriarProdutoDto } from './criar-produto-dto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'http://localhost:5000/catalogo/produtos';
  
  constructor(private httpClient : HttpClient) { }

  obterProdutos() : Observable<ProdutoDto[]> {
    return this.httpClient.get<ProdutoDto[]>(this.url);
  } 
  cadastrarProduto(produto: CriarProdutoDto) : Observable<string> {
    return this.httpClient.post<string>(this.url, produto);
  }
}
