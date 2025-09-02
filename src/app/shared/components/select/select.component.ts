import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
    <ion-item>
      <ion-label>{{ label }}</ion-label>
      <ion-select [multiple]="multiple" [(ngModel)]="selected">
        <ion-select-option *ngFor="let opt of options" [value]="opt">
          {{ opt }}
        </ion-select-option>
      </ion-select>
    </ion-item>
  `,
  styles: [``],
  standalone:false,
})
export class SelectComponent {
  @Input() label: string = 'Select';
  @Input() options: string[] = [];
  @Input() multiple: boolean = false;
  @Input() selected: any;
}
