import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pagamento } from 'src/app/entities/pagamento';
import { PagamentoService } from 'src/app/services/pagamento/pagamento.service';

@Component({
  selector: 'app-pagamento-modal',
  templateUrl: './pagamento-modal.component.html'
})
export class PagamentoModalComponent {
  tipoDePagamento: string;

  constructor(
    public dialogRef: MatDialogRef<PagamentoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pagamento,
    private service: PagamentoService) {}

  efetuarPagamento(): void {
    let pagamento: Pagamento = {
      valor: this.data.valor,
      tipoPagamento: this.tipoDePagamento
    };

    this.service.efetuarPagamento(pagamento).subscribe(
      x => {
        this.dialogRef.close();
        alert("Pagamento efetuado");
      })
  }
}
