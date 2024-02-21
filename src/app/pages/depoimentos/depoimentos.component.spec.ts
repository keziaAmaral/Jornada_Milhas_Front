import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DepoimentosComponent } from './depoimentos.component';
import { DepoimentoService } from 'src/app/services/depoimento/depoimento.service';
import { of } from 'rxjs';
import { Depoimento } from 'src/app/entities/depoimento';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DepoimentosComponent', () => {
  let component: DepoimentosComponent;
  let fixture: ComponentFixture<DepoimentosComponent>;
  let spyService: any;

  beforeEach(() => {
    spyService = jasmine.createSpyObj('DepoimentoService', ['listar']);

    TestBed.configureTestingModule({
      declarations: [DepoimentosComponent],
      providers: [{ provide: DepoimentoService, useValue: spyService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(DepoimentosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch depoimentos on ngOnInit', () => {
    const depoimentos: Depoimento[] = [
      { id: 1, comentario: 'Teste 1', foto: "Foto user", nomeUsuario: "UserName1", deleted:false },
      { id: 2, comentario: 'Teste 2', foto: "Foto user 2", nomeUsuario: "UserName2", deleted:false }
    ]

    spyService.listar.and.returnValue(of(depoimentos));

    fixture.detectChanges();
    expect(component.depoimentos).toEqual(depoimentos);
  });
});
