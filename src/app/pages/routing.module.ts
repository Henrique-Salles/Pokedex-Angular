import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HomeModule } from './home/home.module';
import { DetailsModule } from './details/details.module';

const routes: Routes = [
  {
    path: '',
    component: HomeModule,
  },
  {
    path: 'details/:',
    component: DetailsModule,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
