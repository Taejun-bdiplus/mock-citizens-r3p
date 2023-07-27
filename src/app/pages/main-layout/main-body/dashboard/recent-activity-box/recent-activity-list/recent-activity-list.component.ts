import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-activity-list',
  templateUrl: './recent-activity-list.component.html',
  styleUrls: ['./recent-activity-list.component.css']
})
export class RecentActivityListComponent {
  listItems = [
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'Chris added note to Loan #1234567890:', secondLine: '"Client was informed of blah blah blah ...' },
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'Chris added note to Loan #1234567890:', secondLine: '"Client was informed of blah blah blah ...' },
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'Chris added note to Loan #1234567890:', secondLine: '"Client was informed of blah blah blah ...' },
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'Chris added note to Loan #1234567890:', secondLine: '"Client was informed of blah blah blah ...' },
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'Chris added note to Loan #1234567890:', secondLine: '"Client was informed of blah blah blah ...' },
    { imageUrl: '../assets/images/user_picture.png', firstLine: 'Chris added note to Loan #1234567890:', secondLine: '"Client was informed of blah blah blah ...' }
  ];
}
