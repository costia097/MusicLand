import {Component} from '@angular/core';
import {Box} from '../models/Box';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-track-list',
  template: `

    <!--MAIN CONTENT-->
    <div class="row main-boxes">
      <div *ngFor="let box of boxes | paginate: { itemsPerPage: 12, currentPage: p }" class="col-lg-4 box-style">
        <div class="img-container">
        <img src="assets/mp3.png" class="img-style" (click)="onViewDetailsClick(box.id)"/>
          <!--<button class="btn btn-style" (click)="onViewDetailsClick(box.id)">View details</button>-->
        </div>
      </div>
      <div >
        <pagination-controls class="my-pagination" (pageChange)="p = $event"></pagination-controls>
      </div>
    </div>
    
  `,
  styleUrls: ['app.track.list.component.css']
})
export class AppTrackListComponent {
  public boxes: Array<Box> = [ {'id': 1, 'value': 'one'},  {'id': 2, 'value': 'one'}, {'id': 3, 'value': 'one'},
    {'id': 4, 'value': 'one'},  {'id': 5, 'value': 'one'},  {'id': 6, 'value': 'one'},
    {'id': 7, 'value': 'one'},  {'id': 8, 'value': 'one'},  {'id': 9, 'value': 'one'}];

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
  }

  onViewDetailsClick(trackId: number) {
    this.route.navigate(['track/' + trackId]);
  }
}
