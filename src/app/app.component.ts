import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { tap, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  // Test des requêtes avant intégration à l'appli de l'API

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'https://samsara.live/api-pokemon',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Access-Control-Max-Age': '86400'
    })
  };

  constructor (private http: HttpClient) {}

  ngOnInit() {
    // Step 1 : "Hello, Api ! 👋"
    this.http.get("https://samsara.live/api-pokemon").subscribe((res) => console.log(res));

    // Step 2 : "Get JWT token 🔓"
    this.http.post(
      "https://samsara.live/api-pokemon/api/login",
      { username: "pikachu", password: "pikachu" },
      this.httpOptions
    )
      .pipe(tap((res) => console.log(res)),
        switchMap((res: any) => this.fetchPokemonlist(res.token))
      )
      .subscribe((res) => console.log(res));
  }

  // Step 3 : "Get pokemon list 🎉"
  fetchPokemonlist(token: string) {
    const httpOptionsWithJWT = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };

    return this.http.get(
      "https://samsara.live/api-pokemon/api/pokemons",
      httpOptionsWithJWT
    );
  }
}
