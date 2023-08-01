import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedRoleSubject = new BehaviorSubject<string>('');
  selectedRole$ = this.selectedRoleSubject.asObservable();

  setSelectedRole(selectedRole: string) {
    this.selectedRoleSubject.next(selectedRole);
  }
}
