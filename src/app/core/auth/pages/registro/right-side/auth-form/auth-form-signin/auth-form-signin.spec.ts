import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormSignIn } from './auth-form-signin';

describe('AuthFormSignIn', () => {
  let component: AuthFormSignIn;
  let fixture: ComponentFixture<AuthFormSignIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormSignIn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthFormSignIn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
