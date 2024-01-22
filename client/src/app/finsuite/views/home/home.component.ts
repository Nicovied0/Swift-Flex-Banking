import { Component } from '@angular/core';
import { SidebarStateService } from 'src/app/core/services/SidebarState.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isExpanded: boolean = false;

  constructor(private sidebarStateService: SidebarStateService) {
    this.sidebarStateService.isExpanded$.subscribe(expanded => {
      this.isExpanded = expanded;
    });
  }
}
