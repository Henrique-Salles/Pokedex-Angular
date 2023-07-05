import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModule } from './details/details.module';
import { HomeModule } from './home/home.module';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, DetailsModule, HomeModule, RoutingModule],
})
export class PagesModule {}
