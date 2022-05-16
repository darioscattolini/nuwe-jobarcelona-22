import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jxui-gifts-group-card[id][name][description][tags]',
  templateUrl: './gifts-group-card.component.html',
  styleUrls: ['./gifts-group-card.component.scss']
})
export class GiftsGroupCardComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() description!: string;
  @Input() tags!: string[];
  @Output() selected = new EventEmitter<boolean>();

  public select(): void {
    this.selected.emit(true);
  }
}
