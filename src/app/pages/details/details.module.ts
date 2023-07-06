import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsHeaderComponent } from './details-header/details-header.component';
import { DetailsTypesComponent } from './details-types/details-types.component';
import { DetailsInfoComponent } from './details-info/details-info.component';
import { DetailsStatsComponent } from './details-stats/details-stats.component';

@NgModule({
  declarations: [DetailsComponent, DetailsHeaderComponent, DetailsTypesComponent, DetailsInfoComponent, DetailsStatsComponent],
  imports: [CommonModule],
  exports: [DetailsComponent],
})
export class DetailsModule {}
