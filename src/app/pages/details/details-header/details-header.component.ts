import { Component, Input } from '@angular/core';

@Component({
  selector: 'details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss'],
})
export class DetailsHeaderComponent {
  @Input() name: string = '';
  @Input() order: number = 0;
}
