import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DepoimentoService } from './depoimento.service';
import { environment } from 'src/environments/environment';
import { Depoimento } from '../../entities/depoimento';

describe('DepoimentoService', () => {
  let service: DepoimentoService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DepoimentoService]
    });
    service = TestBed.inject(DepoimentoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should listar return depoimentos', () => {
    const expectedDepoimentos: Depoimento[] = [
      { id: 1, comentario: 'Depoimento 1', foto: "foto user", nomeUsuario: "Nome user", deleted: false}
    ];

    service.listar().subscribe(
      depoimentos => {
        expect(depoimentos).toEqual(expectedDepoimentos);
      },
      fail
    );

    const req = httpTestingController.expectOne(`${apiUrl}/Depoimento/Home`);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedDepoimentos);
  });
})