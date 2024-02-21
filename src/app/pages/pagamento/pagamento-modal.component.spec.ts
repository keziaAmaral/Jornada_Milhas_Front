import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PagamentoModalComponent } from './pagamento-modal.component';
import { PagamentoService } from 'src/app/services/pagamento/pagamento.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Pagamento } from 'src/app/entities/pagamento';
import { of } from 'rxjs';

describe('PagamentoModalComponent', () => {
  let component: PagamentoModalComponent;
  let fixture: ComponentFixture<PagamentoModalComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<PagamentoModalComponent>>;
  let pagamentoServiceSpy: jasmine.SpyObj<PagamentoService>;

  beforeEach(() => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    pagamentoServiceSpy = jasmine.createSpyObj('PagamentoService', ['efetuarPagamento']);

    TestBed.configureTestingModule({
      declarations: [PagamentoModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: PagamentoService, useValue: pagamentoServiceSpy },
        { provide: MAT_DIALOG_DATA, useValue: { valor: 100 } },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(PagamentoModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog and show alert on efetuarPagamento', fakeAsync(() => {
    let pagamento: Pagamento = {id: 1, tipoPagamento: "pix", valor: 10}

    pagamentoServiceSpy.efetuarPagamento.and.returnValue(of(pagamento));

    component.tipoDePagamento = 'Teste Tipo Pagamento';
    component.efetuarPagamento();

    tick();

    expect(dialogRefSpy.close).toHaveBeenCalled();
    expect(pagamentoServiceSpy.efetuarPagamento).toHaveBeenCalled();
  }));
});
