import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/service/poke-api.service';

@Component({
  selector: 'poke-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';

  public pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.params[''];
    const pokemon = this.pokeApiService.apiGetPokemons(
      `${this.urlPokemon}/${id}`
    );

    return pokemon.subscribe((res) => {
      this.pokemon = res;
      console.log(res);
    });
  }
}
