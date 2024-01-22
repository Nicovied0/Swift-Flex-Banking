import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() card: any;
  @Input() showCardInfo: any;
  cardCount: number = 0;
  showCBU: boolean = false;
  showCardNumber: boolean = false;
  cbuNumber: string = "";
  cardNumber: string = "";

  ngOnInit() {
    this.settigData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['card'] || changes['showCardInfo']) {
      this.settigData();
      this.showCBU = false;
      this.showCardNumber = false;
    }
  }

  toggleCbu() {
    this.showCBU = !this.showCBU;
    this.showCardInfo = this.showCBU;
  }

  toggleCard() {
    this.showCardNumber = !this.showCardNumber;
    this.showCardInfo = this.showCardNumber;
  }

  settigData() {
    if (this.card) {
      this.cbuNumber = this.card.alias;
      this.cardNumber = this.card.number;
    } else {
      this.cbuNumber = "";
      this.cardNumber = "";
    }
  }
}
