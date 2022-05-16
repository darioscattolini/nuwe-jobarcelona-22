import { Component, Input } from '@angular/core';

/**
 * Component representing a gifts group. The following `@Input()` properties
 * are required:
 * * `name` - `string`: group name
 * * `description` - `string`: group description
 * * `tags` - `string[]`: group tags
 * * `tabindex` - `number`: required to make component keyboard-focusable
 */
@Component({
  selector: 'jxui-gifts-group-card[name][description][tags]',
  templateUrl: './gifts-group-card.component.html',
  styleUrls: ['./gifts-group-card.component.scss']
})
export class GiftsGroupCardComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() tags!: string[];
  // @Input() tabindex!: number;
}
