import { Injectable } from '@angular/core';
import { DepartamentoDto } from './departamento-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private url = 'https://localhost:5001/catalogo/departamentos';
  
  constructor(private httpClient: HttpClient) { }

  obterDepartamentos() : Observable<DepartamentoDto[]> {
    return this.httpClient.get<DepartamentoDto[]>(this.url);
  }
}
