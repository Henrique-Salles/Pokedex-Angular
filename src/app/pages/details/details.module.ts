import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { DetailsComponent } from './details.component';



@NgModule({
  declarations: [
    DetailsComponentComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetailsModule { }
