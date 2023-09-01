import { TestBed } from '@angular/core/testing';

import { DatosusuariosService } from './datosusuarios.service';

describe('DatosusuariosService', () => {
  let service: DatosusuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosusuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
