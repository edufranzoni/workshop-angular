import { Injectable } from '@angular/core';
import { DepartamentoDto } from './departamento-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private url = 'http://www.mocky.io/v2/5ddebf85310000cb723ae4fc';
  
  constructor(private httpClient: HttpClient) { }

  obterDepartamentos() : Observable<DepartamentoDto[]> {
    return this.httpClient.get<DepartamentoDto[]>(this.url);
  }
}
