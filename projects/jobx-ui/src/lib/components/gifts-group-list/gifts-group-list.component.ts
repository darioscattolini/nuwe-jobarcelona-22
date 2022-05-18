import { Component, Input } from '@angular/core';
import { GiftsGroup } from '../../models/gifts-group';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'jxui-gifts-group-list[groups]',
  templateUrl: './gifts-group-list.component.html',
  styleUrls: ['./gifts-group-list.component.scss']
})
export class GiftsGroupListComponent {
  @Input() groups!: GiftsGroup[];

  public get isMobile() { return this.screen.isMobile; }
  public get isTablet() { return this.screen.isTablet; }

  constructor(private screen: ScreenService) {}
  
  public select(group: GiftsGroup): void {
    alert('Selected group: ' + group.name);
  }
}
