import { TestBed, inject } from '@angular/core/testing';

import { RestMovieService } from './rest-movie.service';

describe('RestMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestMovieService]
    });
  });

  it('should be created', inject([RestMovieService], (service: RestMovieService) => {
    expect(service).toBeTruthy();
  }));
});
