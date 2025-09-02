import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principal-news',
  template: `
    <ion-card>
      <img [src]="image" alt="news image"/>
      <ion-card-header>
        <ion-card-title>{{ title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>{{ description }}</p>
      </ion-card-content>
    </ion-card>
  `,
  styles: [``],
  standalone:false,
})
export class PrincipalNewsComponent {
  @Input() title: string = 'Principal News';
  @Input() description: string = 'Description';
  @Input() image: string = '';
}
