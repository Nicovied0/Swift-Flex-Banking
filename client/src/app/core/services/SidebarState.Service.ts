import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarStateService {
  private isExpandedSubject = new BehaviorSubject<boolean>(false);
  isExpanded$: Observable<boolean> = this.isExpandedSubject.asObservable();

  toggle() {
    this.isExpandedSubject.next(!this.isExpandedSubject.value);
  }
}
