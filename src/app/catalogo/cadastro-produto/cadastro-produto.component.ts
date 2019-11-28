import { Component, OnInit } from '@angular/core';
import { CadastroProduto } from '../cadastro-produto';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  form: FormGroup;
  constructor() {
    this.form = this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    return new FormGroup({
      nome: new FormControl(),
      preco: new FormControl(),
      imagem: new FormControl(),
      ativo: new FormControl()
    });
  }

  onSubmit(){
    console.log(this.form);
  }

}
