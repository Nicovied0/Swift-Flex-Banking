import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FixedTermsService } from '../../services/fixedTerms.service';

@Component({
  selector: 'app-fixed-terms',
  templateUrl: './fixed-terms.component.html',
  styleUrls: ['./fixed-terms.component.scss']
})
export class FixedTermsComponent {
  fixedTerms: any = null
  constructor(private fixedTermsService: FixedTermsService, private router: Router) { }



  ngOnInit(): void {
    this.getOperations();
  }

  getOperations() {
    this.fixedTermsService.getfixedTerms().subscribe(
      response => {
        this.fixedTerms = response
      })
  }
  goLoans() {
    this.router.navigate(['loans'])
  }
}
