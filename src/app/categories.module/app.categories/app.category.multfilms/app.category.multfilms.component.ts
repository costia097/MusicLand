import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-multfilms',
  template: `
    <div class="row main-content">
      <p class="films-header">Multi</p>
        <button class="btn btn-style header-btn-style" (click)="onClickBack()">Back</button>
      <app-track-list [source]="'categories/multi'"></app-track-list>
    </div>
  `,
  styleUrls: ['app.category.multfilms.component.css']
})
export class AppCategoryMultfilmsComponent {
  constructor(private router: Router) {
  }

  onClickBack() {
    this.router.navigate(['categories']);
  }
}
