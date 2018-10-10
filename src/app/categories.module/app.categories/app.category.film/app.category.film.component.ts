import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-film',
  template: `
    <div class="row main-content">
      <p class="films-header">FILMS</p>
      <button class="btn btn-style header-btn-style" (click)="onClickBack()">Back</button>
      <app-track-list [source]="'categories/films'"></app-track-list>
    </div>
  `,
  styleUrls: ['app.category.film.component.css']
})
export class AppCategoryFilmComponent {
  constructor(private router: Router) {
  }

  onClickBack() {
    this.router.navigate(['categories']);
  }
}
