import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;
  public checkOrder: boolean = true;

  public imageUrl = '../../../../assets/icons/sort.png';
  public imageUrl2 = '../../../../assets/icons/unsort.png';

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        console.log(this.getAllPokemons);
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  public sort() {
    const sortedPokemons = this.getAllPokemons.sort(function (
      firstItem: any,
      secondItem: any
    ) {
      return secondItem.status?.id - firstItem.status?.id;
    });
  }

  public unsort() {
    const sortedPokemons = this.getAllPokemons.sort(function (
      firstItem: any,
      secondItem: any
    ) {
      return firstItem.status?.id - secondItem.status?.id;
    });
  }

  public ordenate(): void {
    if (this.checkOrder) this.sort();
    else this.unsort();
    this.checkOrder = !this.checkOrder;
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }
}
