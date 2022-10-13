import { PessoaService } from './services/pessoa.service';
import { Component } from '@angular/core';
import { Pessoa } from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Signa.UI';
  pessoas: Pessoa[] = [];
  pessoasLimpar: Pessoa[] = this.pessoas;
  pessoaToEdit?: Pessoa;
  pessoaToDelete?: Pessoa;
  show: boolean = true;

  constructor(private pessoaService: PessoaService){

  }

  ngOnInit () : void {
    // this.pessoaService
    //   .getPessoas()
    //   .subscribe((result: Pessoa[]) => (this.pessoas = result));
  }

  receiveShow($event: boolean) {
    this.show = $event;
  }

  montarLista() {
    this.pessoaService
    .getPessoas()
    .subscribe((result: Pessoa[]) => (this.pessoas = result, this.pessoasLimpar = result));
  }

  limparLista() {
    this.pessoasLimpar = [];
  }

  updatePessoaList(pessoas: Pessoa[]) {
    this.pessoas = pessoas;
  }

  initNewPessoa() {
    this.pessoaToEdit = new Pessoa();
    this.show = false;
  }

  editPessoa(pessoa: Pessoa){
    this.pessoaToEdit = pessoa;
    this.show = false;
  }

  deletePessoa(pessoa: Pessoa) {
    this.pessoaService
    .deletePessoa(pessoa)
    .subscribe((result: Pessoa[]) => (this.pessoas = result, this.pessoasLimpar = result));
  }
}
