import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinosComponent } from './destinos.component';
import { Destino } from 'src/app/entities/destino';
import { DestinoService } from 'src/app/services/destino/destino.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DestinosComponent', () => {
  let component: DestinosComponent;
  let fixture: ComponentFixture<DestinosComponent>;
  let spyService: any;

  beforeEach(() => {
    spyService = jasmine.createSpyObj('DestinoService', ['listar']);

    TestBed.configureTestingModule({
      declarations: [DestinosComponent],
      providers: [{ provide: DestinoService, useValue: spyService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(DestinosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch destinos on ngOnInit', () => {
    const destinos: Destino[] = [
      { id: 1, nome: 'Teste 1', preco: 1234, deleted:false },
      { id: 2, nome: 'Teste 2', preco: 2345, deleted:false }
    ]

    spyService.listar.and.returnValue(of(destinos));

    fixture.detectChanges();
    expect(component.destinos).toEqual(destinos);
  });

});
