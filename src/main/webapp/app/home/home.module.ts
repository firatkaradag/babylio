import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BabylioSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { LeftbarComponent } from 'app/layouts/leftbar/leftbar.component';

@NgModule({
  imports: [BabylioSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent, LeftbarComponent]
})
export class BabylioHomeModule {}
