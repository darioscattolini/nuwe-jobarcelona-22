import { Component, Input } from '@angular/core';

@Component({
  selector: 'jxui-gifts-group-card[name][description][tags]',
  templateUrl: './gifts-group-card.component.html',
  styleUrls: ['./gifts-group-card.component.scss']
})
export class GiftsGroupCardComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() tags!: string[];
}
