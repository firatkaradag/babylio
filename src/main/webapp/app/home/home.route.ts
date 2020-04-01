import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { MybabyModule } from 'app/shared/mybaby/mybaby.module';
//import { CardComponent } from 'app/shared/card/card.component';
import { NewsComponent } from 'app/news/news.component';

import { LeftbarComponent } from 'app/layouts/leftbar/leftbar.component';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  },
  children: [
    {
      path: 'leftbar',
      component: LeftbarComponent
    },
    {
      path: 'mybaby',
      component: MybabyModule
    },
    // {
    //   path: 'card',
    //   component: CardComponent
    // },
    {
      path: 'news',
      component: NewsComponent
    }
  ]
};
