import { Route } from '@angular/router';

import { LeftbarComponent } from './leftbar.component';

export const leftbarRoute: Route = {
  path: '',
  component: LeftbarComponent,
  outlet: 'leftbar'
};
