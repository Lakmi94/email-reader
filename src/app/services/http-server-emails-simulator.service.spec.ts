import { TestBed } from '@angular/core/testing';

import { HttpServerEmailsSimulatorService } from './http-server-emails-simulator.service';

describe('HttpServerEmailsSimulatorService', () => {
  let service: HttpServerEmailsSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServerEmailsSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
