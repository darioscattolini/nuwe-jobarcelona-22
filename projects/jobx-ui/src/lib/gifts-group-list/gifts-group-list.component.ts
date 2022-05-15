import { Component, Input } from '@angular/core';
import { ResponsiveComponent } from '../responsive/responsive.component';

@Component({
  selector: 'jxui-gifts-group-list[groups]',
  templateUrl: './gifts-group-list.component.html',
  styleUrls: ['./gifts-group-list.component.scss']
})
export class GiftsGroupListComponent extends ResponsiveComponent {
  //@Input() clickHandler!: (groupId: number) => void;
  @Input() groups!: {
    id: number;
    name: string;
    description: string;
    tags: string[];
  }[];
  
  /*public handleClick($event: MouseEvent, groupId: number): void {
    this.clickHandler(groupId);
  }*/
}
