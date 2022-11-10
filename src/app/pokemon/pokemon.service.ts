import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {
  constructor (private http: HttpClient) {}

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue); // of : transforme donnée en type Observable
  }

  getPokemonTypeList(): string[] {
    return [
      'Combat',
      'Eau',
      'Electrik',
      'Feu',
      'Fée',
      'Insecte',
      'Normal',
      'Plante',
      'Poison',
      'Psy',
      'Vol'
    ];
  }

  getPokemonList(): Observable<Pokemon[]> {
    const url = 'api/pokemons';

    return this.http.get<Pokemon[]>(url).pipe(
      // tap: logs the operation
      tap((pokemonList: Pokemon[]) => this.log(pokemonList)),
      catchError((error: Error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    const url = `api/pokemons/${pokemonId}`;

    return this.http.get<Pokemon>(url).pipe(
      tap((pokemon: Pokemon) => this.log(pokemon)),
      catchError((error: Error) => this.handleError(error, undefined))
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    const url = `api/pokemons/?name=${term}`;

    if(term.length <= 1) {
      return of([]);
    }

    return this.http.get<Pokemon[]>(url).pipe(
      tap((response: Pokemon[]) => this.log(response)),
      catchError((error: Error) => this.handleError(error, []))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = 'api/pokemons';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Pokemon>(url, pokemon, httpOptions).pipe(
      tap((response: Pokemon) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const url = 'api/pokemons';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(url, pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null))
    );
  }

  removePokemonById(pokemonId: number): Observable<null> {
    const url = `api/pokemons/${pokemonId}`;

    return this.http.delete(url).pipe(
      tap((response) => this.log(response)),
      catchError((error: Error) => this.handleError(error, null))
    );
  }

}
