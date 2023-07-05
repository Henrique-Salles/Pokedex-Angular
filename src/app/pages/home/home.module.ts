import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeComponentComponent } from './home-component/home-component.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
