import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CriarProdutoDto } from '../criar-produto-dto';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private produtoService: ProdutoService) {
    this.form = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      preco: [0, Validators.min(0)],
      imagem: ['', [Validators.required, Validators.maxLength(255)]],
      ativo: true
    });
  }

  async salvar() {
    const isValid = this.form.dirty && this.form.valid;

    if (!isValid) {
      // TODO: Exibir motivo da falha - obter mensagens de erro do form
      alert('Erro');
      return;
    }

    const controls = this.form.controls;

    const dto: CriarProdutoDto = {
      nome: controls.nome.value,
      preco: controls.preco.value,
      imagem: controls.imagem.value,
      ativo: controls.ativo.value
    }

    try {
      await this.produtoService.criar(dto).toPromise();
      this.router.navigate(['/catalogo/produtos']);
    } catch (error) {
      alert('Falha ao criar produto');
      console.log(error);
    }
  }

  ngOnInit() {
  }
}
