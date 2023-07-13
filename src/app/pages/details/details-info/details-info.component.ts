import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.scss'],
})
export class DetailsInfoComponent {
  @Input() weight: string = '';
  @Input() height: string = '';
  @Input() abilities: any[] = [];
}
