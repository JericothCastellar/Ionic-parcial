import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false,
})
export class CardComponent {
  @Input() news: any;
  @Output() select = new EventEmitter<any>(); 

  handleClick() {
    this.select.emit(this.news);
  }
}
