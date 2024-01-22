import { Component } from '@angular/core';
import { SidebarStateService } from 'src/app/core/services/SidebarState.Service';
import { SideBarService } from 'src/app/core/services/Bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-shared',
  templateUrl: './nav-bar-shared.component.html',
  styleUrls: ['./nav-bar-shared.component.scss'],
})
export class NavBarSharedComponent {
  isExpanded: boolean = false;
  list: any = null;
  searchQuery: string = '';
  selected: any;

  constructor(
    private router: Router,
    private sidebarStateService: SidebarStateService,
    private sideBarService: SideBarService
  ) {
    this.sidebarStateService.isExpanded$.subscribe((expanded) => {
      this.isExpanded = expanded;
    });
  }

  toggleDrawer() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.sidebarStateService.toggle();
  }

  ngOnInit(): void {
    this.getUrls();
  }

  getUrls() {
    this.sideBarService.getUrls().subscribe((urlsNav) => {
      if (urlsNav.length > 0) {
        this.list = urlsNav;
      }
    });
  }

  filteredItems: any[] = [];

  onSearchInput(event: any) {
    this.searchQuery = event.target.value;
    this.filterList(this.searchQuery);
    this.selected = this.searchQuery;
  }

  filterList(query: string) {
    const filterArray = query.toLowerCase();
    this.filteredItems = this.list.filter(function (obj: any) {
      return obj.name.toLowerCase().includes(filterArray);
    });
  }

  goRoute(name: any) {
    this.router.navigate([name]);
  }
}
