import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BabylioSharedModule } from 'app/shared/shared.module';
import { BabylioCoreModule } from 'app/core/core.module';
import { BabylioAppRoutingModule } from './app-routing.module';
import { BabylioHomeModule } from './home/home.module';
import { BabylioEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

import { LeftbarComponent } from './layouts/leftbar/leftbar.component';

import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BabylioSharedModule,
    BabylioCoreModule,
    BabylioHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BabylioEntityModule,
    BabylioAppRoutingModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    LeftbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent
  ],
  bootstrap: [MainComponent]
})
export class BabylioAppModule {}
