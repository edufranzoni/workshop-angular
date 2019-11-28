import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutoDto } from './produto-dto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'https://localhost:5001/catalogo/produtos';
  
  constructor(private httpClient : HttpClient) { }

  obterProdutos() : Observable<ProdutoDto[]> {
    return this.httpClient.get<ProdutoDto[]>(this.url);
  } 
}
