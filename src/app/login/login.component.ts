import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
  message: string = "Vous n'êtes pas connecté. (login/mdp: pikachu/pikachu)";
  name: string;
  password: string;

  constructor (
    private authService: AuthService,
    private router: Router
  ) {}

  setMessage() {
    if(this.authService.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect !';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.authService.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();

        let userName = this.name;
        let userPassword = this.password;
        const userInfo = { userName, userPassword };

        if(isLoggedIn) {
          this.router.navigate([ 'pokemons' ]);
          // test user session
          sessionStorage.setItem('userDetails', JSON.stringify(userInfo));

        } else {
          // test user session
          const { userName, userPassword } = userInfo;
          if(userName && userPassword) return;
          this.password = '';
          this.router.navigate([ 'login' ]);
        };
      })
  }

  logOut() {
    this.authService.logOut();
    this.message = 'Vous avez été deconnecté.';
  }

}
