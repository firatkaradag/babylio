import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { AddbabyComponent } from 'app/shared/addbaby/addbaby.component';
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
      path: 'addbaby',
      component: AddbabyComponent
    },
    {
      path: 'leftbar',
      component: LeftbarComponent
    }
  ]
};
