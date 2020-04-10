import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BabyListComponent } from './baby-list/baby-list.component';
import { BabyDetailComponent } from './baby-detail/baby-detail.component';
import { Baby } from 'app/shared/card/baby';
import { BABIES } from './mock-baby';

const mybabyRoutes: Routes = [
  { path: 'babies', redirectTo: '/mybaby' },
  { path: 'baby/:id', redirectTo: '/mybaby/:id' },
  { path: 'mybaby', component: BabyListComponent, data: { animation: 'babies' } },
  { path: 'mybaby/:id', component: BabyDetailComponent, data: { animation: 'baby' } }
];

@NgModule({
  imports: [RouterModule.forChild(mybabyRoutes)],
  exports: [RouterModule]
})
export class MybabyRoutingModule {}
