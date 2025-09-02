import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <ion-menu side="start" contentId="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ng-content></ng-content>
        </ion-list>
      </ion-content>
    </ion-menu>
  `,
  styles: [``],
  standalone:false,
})
export class SidebarComponent {
  @Input() title: string = 'Menu';
}
