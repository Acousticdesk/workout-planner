import { TestBed } from '@angular/core/testing';

import { MotivationalQuotesService } from './motivational-quotes.service';

describe('MotivationalQuotesService', () => {
  let service: MotivationalQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotivationalQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
