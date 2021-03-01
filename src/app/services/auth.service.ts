import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public firebaseAuth: AngularFireAuth,
    public router: Router,
  ) { }

  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('user', JSON.stringify(res.user.email))
      this.router.navigate(['/roomlist']);
    })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode) {
          alert(errorMessage);
          window.location.reload();
        }
      });
  }

  async logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user')
  }
}
