import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatNumber' })
export class FormatNumberPipe implements PipeTransform {
  transform(value: string): number {
    let valueAsNumber = +value;
    return valueAsNumber / 10;
  }
}
