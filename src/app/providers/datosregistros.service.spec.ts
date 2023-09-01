import { TestBed } from '@angular/core/testing';

import { DatosregistrosService } from './datosregistros.service';

describe('DatosregistrosService', () => {
  let service: DatosregistrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosregistrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
