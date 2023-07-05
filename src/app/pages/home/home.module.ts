import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
