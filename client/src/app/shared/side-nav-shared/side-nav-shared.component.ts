import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarStateService } from 'src/app/core/services/SidebarState.Service';
import { SideBarService } from 'src/app/core/services/Bar.service'
import { LoginService } from 'src/app/core/services/Login.service';

@Component({
  selector: 'app-side-nav-shared',
  templateUrl: './side-nav-shared.component.html',
  styleUrls: ['./side-nav-shared.component.scss']
})
export class SideNavSharedComponent {
  isExpanded: boolean = false;
  showFiller: boolean = false;
  list: any = null

  constructor(private sideBarService: SideBarService, private sidebarStateService: SidebarStateService, private router: Router, private loginService: LoginService) {
    this.sidebarStateService.isExpanded$.subscribe(expanded => {
      this.isExpanded = expanded;
    });
  }

  toggleDrawer() {
    this.sidebarStateService.toggle();

  }

  ngOnInit(): void {
    this.getUrls()
  }

  getUrls() {
    this.sideBarService.getUrls().subscribe(

      urlsNav => {
        if (urlsNav.length > 0) {
          this.list = urlsNav
        }
      }
    )
  }

  navigateToTab(route: any) {
    if (route == "/login") {
      this.loginService.logout()
    }
    this.router.navigate(['/' + route])
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (this.isExpanded == true) {
      this.toggleDrawer()
    }
  }
}
