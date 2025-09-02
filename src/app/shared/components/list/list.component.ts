import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ion-list>
      <ion-item *ngFor="let item of items">
        {{ item }}
      </ion-item>
    </ion-list>
  `,
  styles: [``],
  standalone:false,
})
export class ListComponent {
  @Input() items: string[] = [];
}
