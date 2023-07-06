import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsHeaderComponent } from './details-header/details-header.component';

@NgModule({
  declarations: [DetailsComponent, DetailsHeaderComponent],
  imports: [CommonModule],
  exports: [DetailsComponent],
})
export class DetailsModule {}
