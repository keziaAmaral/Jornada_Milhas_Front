import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Depoimento } from '../../entities/depoimento';
import { DestinoService } from './destino.service';
import { Destino } from 'src/app/entities/destino';

describe('DestinoService', () => {
  let service: DestinoService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DestinoService]
    });
    service = TestBed.inject(DestinoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should listar return destinos', () => {
    const expectedDestinos: Destino[] = [
      { id: 1, nome: 'destino 1', preco: 10, deleted: false}
    ];

    service.listar().subscribe(
        destinos => {
        expect(destinos).toEqual(expectedDestinos);
      },
      fail
    );

    const req = httpTestingController.expectOne(`${apiUrl}/Destinos`);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedDestinos);
  });
})