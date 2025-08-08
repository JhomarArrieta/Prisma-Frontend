import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActionButtons } from './home-action-buttons';

describe('HomeActionButtons', () => {
  let component: HomeActionButtons;
  let fixture: ComponentFixture<HomeActionButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeActionButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeActionButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
