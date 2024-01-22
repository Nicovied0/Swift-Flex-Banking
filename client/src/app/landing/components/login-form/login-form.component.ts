import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { textValidator } from './validators-form.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/Login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],

})
export class LoginFormComponent implements OnInit {
  loginForm: any;
  showDocumentTypeError: boolean = false;
  showDocumentNumberError: boolean = false;
  showPasswordError: boolean = false;
  public formParent: FormGroup = new FormGroup({});

  constructor(private router: Router, private loginService: LoginService) { }
  variable = true


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      documentType: new FormControl('', [Validators.required, Validators.minLength(3)]),
      documentNumber: new FormControl('', [Validators.required, Validators.minLength(8), textValidator()]),
      password: new FormControl('', [Validators.required, Validators.minLength(6),])
    });


    this.loginForm.get('documentType').valueChanges.subscribe(() => {
      this.showDocumentTypeError = this.loginForm.get('documentType').invalid;
    });
    this.loginForm.get('documentNumber').valueChanges.subscribe(() => {
      this.showDocumentNumberError = this.loginForm.get('documentNumber').invalid;
    });
    this.loginForm.get('password').valueChanges.subscribe(() => {
      this.showPasswordError = this.loginForm.get('password').invalid;
    });

  }

  toggleRegister() {
    window.location.reload()
  }

  onSubmit() {
    if (this.loginForm.valid) {

      this.loginService.login(this.loginForm.value)
      console.log(this.loginForm.value);
      alert(`Bienvenido:  ${this.loginForm.value.documentNumber}`)
      this.router.navigate(['/'])
    } else {
      alert("Ingrese un numero de documento y una contraseña valida")
    }

  }
}
