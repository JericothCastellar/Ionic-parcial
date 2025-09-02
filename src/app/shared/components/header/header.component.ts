import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
  `,
  styles: [``],
  standalone:false,
})
export class HeaderComponent {
  @Input() title: string = 'App Header';
}
