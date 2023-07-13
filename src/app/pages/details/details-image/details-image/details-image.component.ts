import { Component, Input } from '@angular/core';

@Component({
  selector: 'details-image',
  templateUrl: './details-image.component.html',
  styleUrls: ['./details-image.component.scss'],
})
export class DetailsImageComponent {
  @Input() imageUrl: string = '';
}
