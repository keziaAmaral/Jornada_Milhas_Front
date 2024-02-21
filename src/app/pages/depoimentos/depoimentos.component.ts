import { Component } from '@angular/core';
import { Depoimento } from 'src/app/entities/depoimento';
import { DepoimentoService } from 'src/app/services/depoimento/depoimento.service';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html'
})
export class DepoimentosComponent {
  depoimentos: Depoimento[] = [];
  constructor(private service: DepoimentoService) {
  }
  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.depoimentos = res;
      }
    )
  }
}
