import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BabylioSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

import { NewsComponent } from '../news/news.component';
// import { CardComponent } from '../shared/card/card.component';

@NgModule({
  imports: [BabylioSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent, NewsComponent]
})
export class BabylioHomeModule {}
