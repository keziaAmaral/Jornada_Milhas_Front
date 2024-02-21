import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDepoimentoComponent } from './card-depoimento.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Depoimento } from 'src/app/entities/depoimento';

describe('CardDepoimentoComponent', () => {
  let component: CardDepoimentoComponent;
  let fixture: ComponentFixture<CardDepoimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDepoimentoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(CardDepoimentoComponent);
    component = fixture.componentInstance;


    let depoimento: Depoimento = { id: 1,comentario: "comentario", foto:"foto",nomeUsuario:"nome user", deleted: false }; 

    component.depoimento = depoimento;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
