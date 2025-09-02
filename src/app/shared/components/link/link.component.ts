import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link',
  template: `
    <a (click)="navigate()">{{ label }}</a>
  `,
  styles: [``],
  standalone: false,
})
export class LinkComponent {
  @Input() label: string = 'Link';
  @Input() route: string = '/';

  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([this.route]);
  }
}
