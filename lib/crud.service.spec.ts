import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
export function crudServiceFactory(http: HttpClient, crudConfiguror: string) {
    return new CrudService(http, crudConfiguror);
}

describe('CrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CrudService,
          useFactory: crudServiceFactory,
          deps: [HttpClient]
        }
      ],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([CrudService], (service: CrudService<any>) => {
    expect(service).toBeTruthy();
  }));
});
