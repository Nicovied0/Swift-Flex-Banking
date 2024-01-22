import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsurancesService } from '../../services/insurances.service';

@Component({
  selector: 'app-box-links',
  templateUrl: './box-links.component.html',
  styleUrls: ['./box-links.component.scss']
})
export class BoxLinksComponent implements OnInit {
  insurances: any
  constructor(private router: Router, private insurancesService: InsurancesService) { }

  ngOnInit(): void {
    this.getInsurances()
  }

  getInsurances() {
    this.insurancesService.getInsurances().subscribe(
      res => {
        this.insurances = res
      }
      )

  }
  goTo(url: any) {
    this.router.navigate([url])
  }
}
