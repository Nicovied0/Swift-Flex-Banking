import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(user: any): Observable<void> {
    if (!user.documentNumber || !user.password) {
      return throwError('Credenciales inválidas');
    }

    const randomToken = this.generateRandomToken(32);
    localStorage.setItem('User', JSON.stringify({ ...user, token: randomToken }));
    return of(undefined);
  }

  logout() {
    localStorage.removeItem('User')
    return of(undefined);
  }

  private generateRandomToken(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }

    return token;
  }


}
