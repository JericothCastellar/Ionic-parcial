import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input formControlName="name"></ion-input>
      </ion-item>
      <ion-note *ngIf="form.get('name')?.invalid && form.get('name')?.touched" color="danger">
        Name is required
      </ion-note>

      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input type="email" formControlName="email"></ion-input>
      </ion-item>
      <ion-note *ngIf="form.get('email')?.invalid && form.get('email')?.touched" color="danger">
        Valid email required
      </ion-note>

      <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password" formControlName="password"></ion-input>
      </ion-item>

      <ion-button expand="block" type="submit" [disabled]="form.invalid">Register</ion-button>
    </form>
  `,
  standalone: false,
})
export class UserFormComponent {
  @Output() formSubmit = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value); // ✅ envía datos al padre
    }
  }
}
