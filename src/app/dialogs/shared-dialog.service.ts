// shared-dialog.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDialogService {
  private isSelectAnalystDialogOpen = false;

  isOpen() {
    return this.isSelectAnalystDialogOpen;
  }

  openDialog() {
    this.isSelectAnalystDialogOpen = true;
  }

  closeDialog() {
    this.isSelectAnalystDialogOpen = false;
  }
}
