import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BabyListComponent } from './babyList/babyList.component';
import { BabyDetailComponent } from './babyDetail/babyDetail.component';

const mybabyRoutes: Routes = [
  { path: 'mybaby', redirectTo: '/babies' },
  { path: 'baby/:id', redirectTo: '/babies/:id' },
  { path: 'mybaby', component: BabyListComponent, data: { animation: 'babies' } },
  { path: 'babies/:id', component: BabyDetailComponent, data: { animation: 'baby' } }
];

@NgModule({
  imports: [RouterModule.forChild(mybabyRoutes)],
  exports: [RouterModule]
})
export class MybabyRoutingModule {}
