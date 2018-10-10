import {NgModule} from '@angular/core';
import {AppCategoriesComponent} from './app.categories/app.categories.component';
import {AppCategoryFilmComponent} from './app.categories/app.category.film/app.category.film.component';
import {AppCategoryRouterModule} from './app.category.router.module';
import {RouterModule} from '@angular/router';
import {AppCategoryMultfilmsComponent} from './app.categories/app.category.multfilms/app.category.multfilms.component';
import {SharedModule} from '../shared.module/shared.module';

@NgModule({
  declarations: [
    AppCategoriesComponent,
    AppCategoryFilmComponent,
    AppCategoryMultfilmsComponent,
  ],
  imports: [
    AppCategoryRouterModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    AppCategoriesComponent,
    AppCategoryFilmComponent
  ]
})
export class CategoryModule {
}
