import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Destino } from 'src/app/entities/destino';
import { PagamentoModalComponent } from '../pagamento/pagamento-modal.component';

@Component({
  selector: 'app-card-destino',
  templateUrl: './card-destino.component.html',
  styleUrls: ['./card-destino.component.scss']
})
export class CardDestinoComponent {
  @Input() destino!: Destino;

  constructor(public dialog: MatDialog){}

  abrirModalPagamento(valor: number): void {
    const dialogRef = this.dialog.open(PagamentoModalComponent, {
      width: '250px',
      data: { valor: valor }
    });
  }
}
