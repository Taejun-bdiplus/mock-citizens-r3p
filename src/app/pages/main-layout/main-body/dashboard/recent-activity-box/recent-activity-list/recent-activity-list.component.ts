import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-activity-list',
  templateUrl: './recent-activity-list.component.html',
  styleUrls: ['./recent-activity-list.component.css']
})
export class RecentActivityListComponent {
  listItems = [
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'First Line 1', secondLine: 'Second Line 1' },
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'First Line 2', secondLine: 'Second Line 2' },
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'First Line 3', secondLine: 'Second Line 3' },
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'First Line 4', secondLine: 'Second Line 4' },
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'First Line 5', secondLine: 'Second Line 5' },
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'First Line 6', secondLine: 'Second Line 6' }
  ];
}
