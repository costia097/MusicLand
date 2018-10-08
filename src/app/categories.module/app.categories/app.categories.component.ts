import {Component} from '@angular/core';

@Component({
  selector: 'app-categories',
  template: `
    <div class="row main-content">
      <ul>
        <li routerLink="films" routerLinkActive="main-content-active">Саундтреки к фильмам</li>
        <li routerLink="multi" routerLinkActive="main-content-active">Саундтреки к мультфильмам</li>
        <li>Саундтреки к сериалам</li>
        <li>Саундтреки к играм</li>
      </ul>
      
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app.categories.component.css']
})
export class AppCategoriesComponent {

}
