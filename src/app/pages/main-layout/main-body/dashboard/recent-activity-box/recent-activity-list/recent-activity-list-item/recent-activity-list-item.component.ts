import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-activity-list-item',
  templateUrl: './recent-activity-list-item.component.html',
  styleUrls: ['./recent-activity-list-item.component.css']
})
export class RecentActivityListItemComponent {
  @Input() imageUrl: string = '';
  @Input() firstLine: string = '';
  @Input() secondLine: string = '';
}
