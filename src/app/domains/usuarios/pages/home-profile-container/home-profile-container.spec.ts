import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProfileContainer } from './home-profile-container';

describe('HomeProfileContainer', () => {
  let component: HomeProfileContainer;
  let fixture: ComponentFixture<HomeProfileContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProfileContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProfileContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
