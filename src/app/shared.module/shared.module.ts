import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppTrackListComponent} from '../app.track-list/app.track.list.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ] ,
  declarations: [
    AppTrackListComponent
  ],
  exports: [
    AppTrackListComponent
  ]
})
export class SharedModule {

}
