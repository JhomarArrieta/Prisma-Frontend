import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavMenu } from './home-nav-menu';

describe('HomeNavMenu', () => {
  let component: HomeNavMenu;
  let fixture: ComponentFixture<HomeNavMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNavMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNavMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
