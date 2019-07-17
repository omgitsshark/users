/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrevRouteService } from './prev-route.service';

describe('Service: PrevRoute', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrevRouteService]
    });
  });

  it('should ...', inject([PrevRouteService], (service: PrevRouteService) => {
    expect(service).toBeTruthy();
  }));
});
