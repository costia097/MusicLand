import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="main-header">
      <div class="row main-header-navigation">
        <ul>
          <li routerLink="">Home</li>
          <li routerLink="tracks" routerLinkActive="active-btn">All tracks</li>
          <li routerLink="categories" routerLinkActive="active-btn">Categories</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['app.header.component.css']
})
export class AppHeaderComponent {
}
