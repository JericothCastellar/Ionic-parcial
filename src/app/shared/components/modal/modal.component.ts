import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: false,
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title!: string;
  @Input() description!: string;
  @Input() url!: string;

  @Output() close = new EventEmitter<void>();

  constructor(private iab: InAppBrowser) {}

  dismiss() {
    this.isOpen = false;
    this.close.emit();
  }

  openInAppBrowser() {
    if (this.url) {
      this.iab.create(this.url, '_system');
    }
  }
}
