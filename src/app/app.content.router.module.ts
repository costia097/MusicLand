import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppTrackInfoComponent} from './app.track.info/app-track-info.component';
import {AppTrackListComponent} from './app.track-list/app.track.list.component';
import {AppUserProfile} from './app.user.profile/app.user.profile';
import {AppCategoriesComponent} from './app.categories/app.categories.component';
import {AppHomeComponent} from './app.home/app.home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        pathMatch: 'full',
        component: AppHomeComponent
      },
      {
        path: 'tracks',
        pathMatch: 'full',
        component: AppTrackListComponent
      },
      {
        path: 'track/:id',
        pathMatch: 'full',
        component: AppTrackInfoComponent
      },
      {
        path: 'userProfile',
        pathMatch: 'full',
        component: AppUserProfile
      },
      {
        path: 'categories',
        pathMatch: 'full',
        component: AppCategoriesComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppContentRouterModule {
}
