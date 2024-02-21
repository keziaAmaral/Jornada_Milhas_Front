import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { CardDestinoComponent } from './card-destino.component';
import { PagamentoModalComponent } from '../pagamento/pagamento-modal.component';
import { Destino } from 'src/app/entities/destino';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardDestinoComponent', () => {
  let component: CardDestinoComponent;
  let fixture: ComponentFixture<CardDestinoComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const dialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [CardDestinoComponent],
      providers: [{ provide: MatDialog, useValue: dialogSpyObj }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDestinoComponent);
    component = fixture.componentInstance;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;

    let destino: Destino = { id: 1, nome: "destino 1", preco:200, deleted: false }; 

    component.destino = destino;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open payment modal', () => {
    const valor = 100;
    let destino: Destino = { id: 1, nome: "destino 1", preco:valor, deleted: false }; 
    component.abrirModalPagamento(valor);

    expect(dialogSpy.open).toHaveBeenCalledWith(PagamentoModalComponent, {
      width: '250px',
      data: { valor: valor }
    });
  });
});
