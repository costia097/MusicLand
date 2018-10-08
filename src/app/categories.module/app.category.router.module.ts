import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppCategoriesComponent} from './app.categories/app.categories.component';
import {AppCategoryFilmComponent} from './app.categories/app.category.film/app.category.film.component';
import {AppCategoryMultfilmsComponent} from './app.categories/app.category.multfilms/app.category.multfilms.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'categories',
        pathMatch: 'full',
        component: AppCategoriesComponent
      },
      {
        path: 'categories/films',
        pathMatch: 'full',
        component: AppCategoryFilmComponent
      },
      {
        path: 'categories/multi',
        pathMatch: 'full',
        component: AppCategoryMultfilmsComponent
      }
    ])
  ]
})
export class AppCategoryRouterModule {
}
