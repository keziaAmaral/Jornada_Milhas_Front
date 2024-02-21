import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Pagamento } from "../../entities/pagamento";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  efetuarPagamento(pagamento: Pagamento): Observable<Pagamento> {
    return this.httpClient.post<Pagamento>(`${this.apiUrl}/Pagamento`, pagamento);
  }
}
