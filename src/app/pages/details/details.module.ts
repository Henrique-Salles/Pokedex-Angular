import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsHeaderComponent } from './details-header/details-header.component';
import { DetailsTypesComponent } from './details-types/details-types.component';

@NgModule({
  declarations: [DetailsComponent, DetailsHeaderComponent, DetailsTypesComponent],
  imports: [CommonModule],
  exports: [DetailsComponent],
})
export class DetailsModule {}
