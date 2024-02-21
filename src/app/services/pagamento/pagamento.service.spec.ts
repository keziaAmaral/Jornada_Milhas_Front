import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { PagamentoService } from './pagamento.service';
import { Pagamento } from 'src/app/entities/pagamento';

describe('PagamentoService', () => {
  let service: PagamentoService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PagamentoService]
    });
    service = TestBed.inject(PagamentoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call efetuar pagamento', () => {
    const expectedPagamento: Pagamento = { id: 1, tipoPagamento: 'pix', valor: 10};
    
    service.efetuarPagamento(expectedPagamento).subscribe(
        destinos => {
        expect(destinos).toEqual(expectedPagamento);
      },
      fail
    );

    const req = httpTestingController.expectOne(`${apiUrl}/Pagamento`);
    expect(req.request.method).toEqual('POST');

    req.flush(expectedPagamento);
  });
})