import { TestBed, inject } from '@angular/core/testing';
import { UserListService } from 'src/app/shared/service/user-list.service';

describe('UserListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserListService]
    });
  });

  it('should be created', inject([UserListService], (service: UserListService) => {
    expect(service).toBeTruthy();
  }));
});
