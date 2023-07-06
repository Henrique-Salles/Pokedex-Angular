import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsHeaderComponent } from './details-header/details-header.component';
import { DetailsTypesComponent } from './details-types/details-types.component';
import { DetailsInfoComponent } from './details-info/details-info.component';

@NgModule({
  declarations: [DetailsComponent, DetailsHeaderComponent, DetailsTypesComponent, DetailsInfoComponent],
  imports: [CommonModule],
  exports: [DetailsComponent],
})
export class DetailsModule {}
