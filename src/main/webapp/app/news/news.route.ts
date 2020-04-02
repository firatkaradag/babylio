import { Route } from '@angular/router';

import { NewsComponent } from './news.component';

export const newsRoute: Route = {
  path: '',
  component: NewsComponent,
  outlet: 'news'
};
