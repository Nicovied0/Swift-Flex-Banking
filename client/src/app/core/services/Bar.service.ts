import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  private mockUrl = '/assets/mocks/mock-sideBar.json';

  constructor(private http: HttpClient) { }

  getUrls(): Observable<Links[]> {
    return this.http.get<Links[]>(this.mockUrl).pipe(
      catchError(() => of([]))
    );
  }
}


export interface Links {
  id: number;
  name: string;
  icon: string;
  url: string
}
