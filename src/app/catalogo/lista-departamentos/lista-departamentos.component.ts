import { Component, OnInit } from '@angular/core';
import { DepartamentoDto } from 'src/app/catalogo/departamento-dto';
import { DepartamentoService } from '../departamento.service';

@Component({
  selector: 'app-lista-departamentos',
  templateUrl: './lista-departamentos.component.html',
  styleUrls: ['./lista-departamentos.component.css']
})
export class ListaDepartamentosComponent implements OnInit {

  departamentos: Array<DepartamentoDto> = []
  carregando: boolean = false;

  constructor(private departamentService: DepartamentoService) { }

  async ngOnInit() {
    try {
      this.carregando = true;
      this.departamentos = await this.departamentService.obterDepartamentos().toPromise();
    } catch(error){
      console.log(error);
    } finally {
      this.carregando = false;
    }
    
  }

}
