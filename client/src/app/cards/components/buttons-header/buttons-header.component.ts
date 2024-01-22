import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonHeadderService } from '../../services/buttonHeadder.service';

@Component({
  selector: 'app-buttons-header',
  templateUrl: './buttons-header.component.html',
  styleUrls: ['./buttons-header.component.scss']
})
export class ButtonsHeaderComponent implements OnInit {
  constructor(private router: Router, private buttonHeadderService: ButtonHeadderService) { }

  cardsOptions: any

  ngOnInit(): void {
    this.getButtons()
  }

  getButtons() {
    this.buttonHeadderService.getCardsButtons().subscribe(
      res => {
        this.cardsOptions = res
      }
    )
  }

  goTo(url: any) {
    this.router.navigate([url])
  }
}
