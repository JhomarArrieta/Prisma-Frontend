import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUserInfo } from './home-user-info';

describe('HomeUserInfo', () => {
  let component: HomeUserInfo;
  let fixture: ComponentFixture<HomeUserInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUserInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUserInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
