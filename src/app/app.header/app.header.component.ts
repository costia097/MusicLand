import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="main-header">
      <div class="row main-header-navigation">
        <div class="col-3">
          <button class="btn  btn-style" routerLink="">Home</button>
        </div>
        <div class="col-3">
          <button class="btn btn-style" routerLink="tracks" routerLinkActive="active-btn">All tracks</button>
        </div>
        <div class="col-3">
          <button class="btn btn-style" routerLink="categories" routerLinkActive="active-btn">Categories</button>
        </div>
        <div class="col-3">
          <button class="btn btn-style">Home</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['app.header.component.css']
})
export class AppHeaderComponent {

}
