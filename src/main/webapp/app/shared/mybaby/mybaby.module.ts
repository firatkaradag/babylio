import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BabyListComponent } from './babyList/babyList.component';
import { BabyDetailComponent } from './babyDetail/babyDetail.component';

import { MybabyRoutingModule } from './mybaby-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, MybabyRoutingModule],
  declarations: [BabyListComponent, BabyDetailComponent]
})
export class MybabyModule {}
