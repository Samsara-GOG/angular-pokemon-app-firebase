import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  currentPokemon: Pokemon | undefined;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService) {}

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe((pokemon) => this.currentPokemon = pokemon)
    }
  }

  removePokemon(pokemon: Pokemon) {
    this.pokemonService.removePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonList());
  }

  goToPokemonList() {
    this.router.navigate([ 'pokemons' ]);
  }

  goToEditPokemon(pokemon: Pokemon) {
    const url = `pokemon/${pokemon.id}/edit`;
    this.router.navigate([ url ]);
  }

}
