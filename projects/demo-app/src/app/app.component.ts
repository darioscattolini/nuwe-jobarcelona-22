import { Component } from '@angular/core';
import { groups } from 'sample-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public giftsGroups = groups;
}
