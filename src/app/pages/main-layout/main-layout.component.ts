// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-main-layout',
//   templateUrl: './main-layout.component.html',
//   styleUrls: ['./main-layout.component.css']
// })
// export class MainLayoutComponent {

// }


import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  selectedRole: string = ''; // Assuming selectedRole is of type string. You should set its value accordingly.

  constructor(private sharedService: SharedService) {
    this.sharedService.selectedRole$.subscribe(selectedRole => {
      this.selectedRole = selectedRole;
    });
  }
}
