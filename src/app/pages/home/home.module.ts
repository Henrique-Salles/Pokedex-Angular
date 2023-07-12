import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { ListItemComponent } from './list-item/list-item/list-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    PokeListComponent,
    ListItemComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent, PokeListComponent],
})
export class HomeModule {}
