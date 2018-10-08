import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="main-body">
      
      <app-sidebar></app-sidebar>
      
      <div class="container-fluid main-content-wrapper">
        <div class="main-content ">
          
          <app-header></app-header>
          
          <div class="spacer-style">
          </div>
          
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private activatedRoute:ActivatedRoute){
  }
}
