import { Component, Input } from '@angular/core';

@Component({
  selector: 'poke-stats',
  templateUrl: './details-stats.component.html',
  styleUrls: ['./details-stats.component.scss'],
})
export class DetailsStatsComponent {
  @Input() stats: any[] = [];
  @Input() types: any[] = [];
}
