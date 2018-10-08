import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppTrackInfoComponent} from './app.track.info/app-track-info.component';
import {RouterModule} from '@angular/router';
import {AppContentRouterModule} from './app.content.router.module';
import {AppTrackListComponent} from './app.track-list/app.track.list.component';
import {AppUserProfile} from './app.user.profile/app.user.profile';
import {AppSidebarComponent} from './app.sidebar/app.sidebar.component';
import {AppHeaderComponent} from './app.header/app.header.component';
import {AppHomeComponent} from './app.home/app.home.component';
import {CategoryModule} from './categories.module/category.module';

@NgModule({
  declarations: [
    AppComponent, AppTrackInfoComponent, AppTrackListComponent,
    AppUserProfile, AppSidebarComponent,
    AppHeaderComponent, AppHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule,
    AppContentRouterModule,
    CategoryModule
  ],
  exports: [AppTrackListComponent, AppTrackInfoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
