import { TestBed } from '@angular/core/testing';

import { ProfileCharacterService } from './profile-character.service';

describe('ProfileCharacterService', () => {
  let service: ProfileCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
