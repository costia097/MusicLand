import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'track-info',
  template: `
    <div class="row main-context">
      <button class="btn btn-style" (click)="onBackBtn()">Back</button>
      <div class="col-4">
        Col one
      </div>
      <div class="col-4">
        Col two
      </div>
      <div class="col-4">
        Col three
      </div>
    </div>
  `,
  styleUrls: ['app-track-info.component.css']
})
export class AppTrackInfoComponent implements OnInit{
  private previousUrl: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParamMap.subscribe(value => {
      let source = value.get('source');
      console.log('Source is: ' + source);
      this.previousUrl = source;
    })
  }

  ngOnInit(): void {
  }

  onBackBtn() {
    this.router.navigate([this.previousUrl]);
  }

}
