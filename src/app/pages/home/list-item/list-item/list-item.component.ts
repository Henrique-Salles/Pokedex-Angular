import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() order: number = 0;
  @Input() name: string = '';
  @Input() imageUrl: string = '';
}
