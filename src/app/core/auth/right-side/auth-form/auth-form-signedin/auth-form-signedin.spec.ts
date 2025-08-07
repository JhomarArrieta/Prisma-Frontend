import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormSignedin } from './auth-form-signedin';

describe('AuthFormSignedin', () => {
  let component: AuthFormSignedin;
  let fixture: ComponentFixture<AuthFormSignedin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormSignedin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthFormSignedin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
