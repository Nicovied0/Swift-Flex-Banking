import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  ngOnInit(): void {
    alert('Ingrese cualquier credencial para ir al inicio de la app');
  }
}
