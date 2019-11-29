import { Injectable } from '@angular/core';
import { ProdutoDto } from './produto-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CriarProdutoDto } from './criar-produto-dto';
import { environment } from './../../environments/environment';
import { EditarProdutoDto } from './editar-produto-dto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private url = environment.baseApiUrl + '/catalogo/produtos';

  constructor(private httpClient: HttpClient) { }

  obter(): Observable<ProdutoDto[]> {
    return this.httpClient.get<ProdutoDto[]>(this.url);
  }

  criar(dto: CriarProdutoDto) : Observable<ProdutoDto> {
    return this.httpClient.post<ProdutoDto>(this.url, dto);
  }

  atualizar(dto: EditarProdutoDto) : Observable<ProdutoDto> {
    return this.httpClient.post<ProdutoDto>(`${this.url}/${dto.id}`, dto);
  }

  obterPorId(id: number) : Observable<ProdutoDto>{
    return this.httpClient.get<ProdutoDto>(`${this.url}/${id}`);
  }
}
