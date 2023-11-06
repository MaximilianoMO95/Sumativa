import { TestBed } from '@angular/core/testing';

import { MiServicioRutinaService } from './mi-servicio-rutina.service';

describe('MiServicioRutinaService', () => {
  let service: MiServicioRutinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiServicioRutinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
