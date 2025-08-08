import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormLogin } from './auth-form-login';

describe('AuthFormLogin', () => {
  let component: AuthFormLogin;
  let fixture: ComponentFixture<AuthFormLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthFormLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
