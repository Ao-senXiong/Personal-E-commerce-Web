import { TestBed } from '@angular/core/testing';

import { Luv2ShopFormService } from './luv2-shop-form-service.service';

describe('Luv2ShopFormServiceService', () => {
  let service: Luv2ShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Luv2ShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
