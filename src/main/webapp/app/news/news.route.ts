import { Route } from '@angular/router';

import { NewsComponent } from './news.component';

export const newsRoute: Route = {
  path: 'news',
  component: NewsComponent,
  data: {
    pageTitle: 'news'
  }
};
