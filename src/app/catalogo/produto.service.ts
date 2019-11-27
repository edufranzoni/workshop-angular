import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutoDto } from './produto-dto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'http://www.mocky.io/v2/5ddeb5be310000536c3ae4c2';
  
  constructor(private httpClient : HttpClient) { }

  obterProdutos() : Observable<ProdutoDto[]> {
    return this.httpClient.get<ProdutoDto[]>(this.url);
  } 
}
