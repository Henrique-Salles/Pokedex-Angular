import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-types',
  templateUrl: './details-types.component.html',
  styleUrls: ['./details-types.component.scss'],
})
export class DetailsTypesComponent {
  @Input() type1: string = '';
  @Input() type2: string = '';
}
