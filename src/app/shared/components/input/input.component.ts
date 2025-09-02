import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <ion-item>
      <ion-label position="floating">{{ label }}</ion-label>
      <ion-input [type]="type" [(ngModel)]="value"></ion-input>
    </ion-item>
  `,
  styles: [``],
  standalone:false,
})
export class InputComponent {
  @Input() label: string = 'Input';
  @Input() type: string = 'text';
  @Input() value: any;
}
