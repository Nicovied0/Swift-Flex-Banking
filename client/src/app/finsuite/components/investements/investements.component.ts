import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InvestmentsService } from '../../services/investments.service';

@Component({
  selector: 'app-investements',
  templateUrl: './investements.component.html',
  styleUrls: ['./investements.component.scss']
})
export class InvestementsComponent {
  investements: any = null
  constructor(private investmentsService: InvestmentsService, private router: Router) { }


  ngOnInit(): void {
    this.getOperations();
  }

  getOperations() {
    this.investmentsService.getInvestiments().subscribe(
      response => {
        this.investements = response
      })
  }
  goLoans() {
    this.router.navigate(['loans'])
  }
}
