import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartamentoDto } from './departamento-dto';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private url = environment.baseApiUrl + '/catalogo/departamentos';

  constructor(private httpClient: HttpClient) { }

  obter(): Observable<DepartamentoDto[]> {
    return this.httpClient.get<DepartamentoDto[]>(this.url);
  }
}
