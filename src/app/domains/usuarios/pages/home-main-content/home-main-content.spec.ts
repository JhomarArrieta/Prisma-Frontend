import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainContent } from './home-main-content';

describe('HomeMainContent', () => {
  let component: HomeMainContent;
  let fixture: ComponentFixture<HomeMainContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMainContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMainContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
