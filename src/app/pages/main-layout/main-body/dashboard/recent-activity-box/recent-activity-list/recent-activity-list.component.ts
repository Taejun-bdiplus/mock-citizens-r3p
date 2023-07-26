import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-activity-list',
  templateUrl: './recent-activity-list.component.html',
  styleUrls: ['./recent-activity-list.component.css']
})
export class RecentActivityListComponent {
  listItems = [
    { imageUrl: 'path/to/image1.jpg', firstLine: 'First Line 1', secondLine: 'Second Line 1' },
    { imageUrl: 'path/to/image2.jpg', firstLine: 'First Line 2', secondLine: 'Second Line 2' },
    { imageUrl: 'path/to/image3.jpg', firstLine: 'First Line 3', secondLine: 'Second Line 3' },
    { imageUrl: 'path/to/image4.jpg', firstLine: 'First Line 4', secondLine: 'Second Line 4' },
    { imageUrl: 'path/to/image5.jpg', firstLine: 'First Line 5', secondLine: 'Second Line 5' },
    { imageUrl: 'path/to/image6.jpg', firstLine: 'First Line 6', secondLine: 'Second Line 6' }
  ];
}
