import {Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sidebar-wrapper" [ngClass]="{ 'hide-sidebar':isToggled() }">
      <ul>
        <li>Feature one</li>
        <li>Feature two</li>
        <li>Feature three</li>
      </ul>
    </div>

    <button class="btn btn-style hide-button" (click)="onToggleClick()">Click me</button>
  `,
  styleUrls: ['app.sidebar.component.css']
})
export class AppSidebarComponent {
  public toggled: boolean = true;

  isToggled(): boolean {
    return this.toggled;
  }

  onToggleClick() {
    this.toggled = !this.toggled;
  }
}
