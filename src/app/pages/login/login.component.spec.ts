
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let validationFormsService: ValidateFormsService;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        ValidateFormsService,
        LocalstorageService,
        FormBuilder
      ]
    }).compileComponents();
    validationFormsService = TestBed.inject(ValidateFormsService);
    formBuilder = TestBed.inject(FormBuilder);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty email and password fields', () => {
    expect(component.loginForm.get('email')?.value).toEqual('');
    expect(component.loginForm.get('password')?.value).toEqual('');
  });

  it('should set message and classMessage if authentication fails', () => {
    const loginFormValue = { email: 'test@example.com', password: 'password' };
    const loginResponse = false;

    authServiceSpy.login.and.returnValue(of(loginResponse));

    component.loginForm.setValue(loginFormValue);
    component.login();

    expect(component.classMessage).toEqual('message error');
    expect(component.message).toEqual('Error de autenticacion');
  });
});