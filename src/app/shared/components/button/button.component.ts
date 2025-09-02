import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <ion-button [color]="color" [type]="type" [disabled]="disabled" expand="block">
      <ng-content></ng-content>
    </ion-button>
  `,
  styleUrls: ['./button.component.scss'],
  standalone: false,
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() color: string = 'primary';
}
