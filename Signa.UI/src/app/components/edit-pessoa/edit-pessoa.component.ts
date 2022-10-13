import { PessoaService } from './../../services/pessoa.service';
import { Pessoa } from './../../models/pessoa';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-pessoa',
  templateUrl: './edit-pessoa.component.html',
  styleUrls: ['./edit-pessoa.component.css']
})
export class EditPessoaComponent implements OnInit {
  @Input() pessoa?: Pessoa;
  @Input() showGet?: boolean;
  @Output() pessoasUpdated = new EventEmitter<Pessoa[]>();
  @Output() show = new EventEmitter < boolean > ();

  constructor(private PessoaService: PessoaService) { }

  ngOnInit(): void {
  }

  updatePessoa(pessoa: Pessoa) {
    this.PessoaService
    .updatePessoa(pessoa)
    .subscribe((pessoas) => this.pessoasUpdated.emit(pessoas));
    this.backButton();
  }

  deletePessoa(pessoa: Pessoa) {
    this.PessoaService
    .deletePessoa(pessoa)
    .subscribe((pessoas) => this.pessoasUpdated.emit(pessoas));
    this.backButton();
  }

  createPessoa(pessoa: Pessoa) {
    this.PessoaService
    .createPessoa(pessoa)
    .subscribe((pessoas) => this.pessoasUpdated.emit(pessoas));
    this.backButton();
  }

  backButton() {
    this.showGet = true;
    this.show.emit(true);
  }

}
