import { NgModule } from '@angular/core';
import { BabylioSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

import { CardComponent } from './card/card.component';

import { NewsComponent } from '../news/news.component';
// import { BabyListComponent } from './mybaby/babyList/babyList.component';
// import { BabyDetailComponent } from './mybaby/babyDetail/babyDetail.component';
// import { MybabyRoutingModule } from './mybaby/mybaby-routing.module';

@NgModule({
  imports: [BabylioSharedLibsModule],
  declarations: [
    FindLanguageFromKeyPipe,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    CardComponent,
    NewsComponent
  ],
  entryComponents: [LoginModalComponent],
  exports: [
    BabylioSharedLibsModule,
    FindLanguageFromKeyPipe,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    CardComponent,
    NewsComponent
  ]
})
export class BabylioSharedModule {}
