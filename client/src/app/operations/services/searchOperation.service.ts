import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchOperationService {
  private searchValueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchValue$: Observable<string> = this.searchValueSubject.asObservable();

  setSearchValue(value: string): void {
    this.searchValueSubject.next(value);
  }

  getSearchValue(): Observable<string> {
    return this.searchValue$;
  }
}
