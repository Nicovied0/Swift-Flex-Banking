import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoansService } from '../../services/loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent {
  loans: any = null
  constructor(private loansService: LoansService, private router: Router) { }

  lastLoans: any = null

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations() {
    this.loansService.getLoans().subscribe(
      response => {
        this.lastLoans = response
      })
  }
  goLoans() {
    this.router.navigate(['loans'])
  }
}
