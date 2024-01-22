import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeOfferService } from '../../services/we-offer.service';

@Component({
  selector: 'app-box-links',
  templateUrl: './box-links.component.html',
  styleUrls: ['./box-links.component.scss']
})
export class BoxLinksComponent implements OnInit {
  offers: any
  constructor(private router: Router, private weOfferService: WeOfferService) { }

  ngOnInit(): void {
    this.getOffers()
  }

  getOffers() {
    this.weOfferService.getWeOffer().subscribe(
      res => {
        this.offers = res
      }
    )

  }
  goTo(url: any) {
    this.router.navigate([url])
  }
}

