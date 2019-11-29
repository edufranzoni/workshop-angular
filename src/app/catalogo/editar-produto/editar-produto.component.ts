import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProdutoService } from '../produto.service';
import { ProdutoDto } from '../produto-dto';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarProdutoDto } from '../editar-produto-dto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit, OnDestroy {
  private produto: ProdutoDto;
  private sub: Subscription;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private produtoService: ProdutoService) { }

  async ngOnInit() {
    this.sub = this.route.params.subscribe(p => {
      this.carregarProduto(p.id);
    })
  }

  async carregarProduto(id: number) {
    try {
      this.produto = await this.produtoService.obterPorId(id).toPromise();
      this.form = this.createForm();
    } catch (error) {
      this.tratarErro(error, '/catalogo/produtos');
    }
  }

  private tratarErro(error: HttpErrorResponse, routeTo?: string) {
    if (error.status === 404) {
      alert('Item Não encontrado');

      if (routeTo) {
        this.router.navigate([routeTo]);
      }
    }
    else {
      alert('Erro');
    }
  }

  createForm() {
    return this.formBuilder.group({
      nome: [this.produto.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      preco: [this.produto.preco, Validators.min(0)],
      imagem: [this.produto.imagem, [Validators.required, Validators.maxLength(255)]],
      ativo: this.produto.ativo
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

    const dto: EditarProdutoDto = {
      id: this.produto.id,
      nome: controls.nome.value,
      preco: controls.preco.value,
      imagem: controls.imagem.value,
      ativo: controls.ativo.value
    }

    try {
      await this.produtoService.atualizar(dto).toPromise();
      this.router.navigate(['/catalogo/produtos']);
    } catch (error) {
      alert('Falha ao atualizar produto');
      console.log(error);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
