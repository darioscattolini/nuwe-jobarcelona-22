import { Component, Input } from '@angular/core';
import { ScreenService } from '../responsive/screen.service';
//import { ResponsiveComponent } from '../responsive/responsive.component';

@Component({
  selector: 'jxui-gifts-group-list[groups]',
  templateUrl: './gifts-group-list.component.html',
  styleUrls: ['./gifts-group-list.component.scss']
})
export class GiftsGroupListComponent /*extends ResponsiveComponent*/ {
  @Input() groups!: {
    id: number;
    name: string;
    description: string;
    tags: string[];
  }[];

  constructor(public screen: ScreenService) {}
  
  public select(group: this['groups'][number]): void {
    alert('Selected group: ' + group.name);
  }
}
