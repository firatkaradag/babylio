import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
// import { MybabyModule } from 'app/shared/mybaby/mybaby.module';
import { CardComponent } from 'app/shared/card/card.component';
import { NewsComponent } from 'app/news/news.component';
import { BabyListComponent } from 'app/mybaby/baby-list/baby-list.component';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  },
  children: [
    {
      path: 'card',
      component: CardComponent
    },
    {
      path: 'news',
      component: NewsComponent
    },
    {
      path: 'mybaby',
      component: BabyListComponent
    }
  ]
};
