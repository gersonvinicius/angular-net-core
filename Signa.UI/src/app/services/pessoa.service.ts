import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private url = "Pessoa";
  constructor(private http: HttpClient) { }

  public getPessoas() : Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updatePessoa(pessoa: Pessoa) : Observable<Pessoa[]> {
    return this.http.put<Pessoa[]>(
      `${environment.apiUrl}/${this.url}`,
      pessoa
    );
  }

  public createPessoa(pessoa: Pessoa) : Observable<Pessoa[]> {
    return this.http.post<Pessoa[]>(
      `${environment.apiUrl}/${this.url}`,
      pessoa
    );
  }

  public deletePessoa(pessoa: Pessoa) : Observable<Pessoa[]> {
    return this.http.delete<Pessoa[]>(
      `${environment.apiUrl}/${this.url}/${pessoa.pessoaId}`
    );
  }
}
