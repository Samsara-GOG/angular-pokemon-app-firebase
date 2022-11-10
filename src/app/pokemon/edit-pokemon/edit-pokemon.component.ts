import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">
      Editer {{currentPokemon?.name}}
    </h2>
    <p *ngIf="currentPokemon" class="center">
      <img [src]="currentPokemon.picture" alt="image-pokemon">
    </p>
    <app-pokemon-form *ngIf="currentPokemon" [pokemon]="currentPokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  currentPokemon: Pokemon | undefined;

  constructor (
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe((pokemon) => this.currentPokemon = pokemon)
    }
  }

}
