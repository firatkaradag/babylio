import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BabyListComponent } from './baby-list/baby-list.component';
import { BabyDetailComponent } from './baby-detail/baby-detail.component';

@NgModule({
  declarations: [BabyListComponent, BabyDetailComponent],
  imports: [CommonModule]
})
export class MybabyModule {}
