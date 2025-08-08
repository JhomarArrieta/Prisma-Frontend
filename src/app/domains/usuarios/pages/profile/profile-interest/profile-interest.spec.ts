import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInterest } from './profile-interest';

describe('ProfileInterest', () => {
  let component: ProfileInterest;
  let fixture: ComponentFixture<ProfileInterest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileInterest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInterest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
