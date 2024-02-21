import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Destino } from '../../entities/destino';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar() : Observable<Destino[]> {
    return this.httpClient.get<Destino[]>(`${this.apiUrl}/Destinos`)
  }
}
