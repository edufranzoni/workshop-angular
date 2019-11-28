import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CriarProdutoDto } from '../criar-produto-dto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private produtoService: ProdutoService) {
    this.form = this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    return this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      preco: [0, [Validators.min(0)]],
      imagem: ['', [Validators.required, Validators.maxLength(255)]],
      ativo: true
    });
    // return new FormGroup({
    //   nome: new FormControl(),
    //   preco: new FormControl(),
    //   imagem: new FormControl(),
    //   ativo: new FormControl(true)
    // });
  }

  async onSubmit() {
    const isValid = this.form.dirty && this.form.valid;
    
    if (!isValid) {
      //TODO: avisar que tem falha.
      alert('Ops, alguns dados não foram informados');
      return;
    }

    const controls = this.form.controls;
    const produto: CriarProdutoDto = {
      nome: controls.nome.value,
      preco: controls.preco.value,
      imagem: controls.imagem.value,
      ativo: controls.ativo.value,
    }
    await this.produtoService.cadastrarProduto(produto).toPromise();
  }
}
