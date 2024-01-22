import { Component } from '@angular/core';
import { CardsService } from '../../services/cardService.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
@Component({
  selector: 'app-body-cards',
  templateUrl: './body-cards.component.html',
  styleUrls: ['./body-cards.component.scss']
})
export class BodyCardsComponent {
  constructor(private cardsService: CardsService) { }
  public isToggleActive: boolean = false;
  disabledButtonLeft: boolean = true
  disabledButtonRigth: boolean = false
  card: any = null;
  cardAmount: any = null;
  actualCard: number = 1;
  btnLeft: boolean = false
  btnRigth: boolean = true
  public showCardInfo: boolean = true;

  isFadingOut: boolean = false;

  ngOnInit(): void {
    this.loadCardAndCount();
  }

  loadCardAndCount() {
    this.cardsService.getCards().subscribe(
      tarjetas => {
        if (tarjetas.length > 0) {
          this.card = tarjetas[this.actualCard - 1];
        } else {
          this.card = null;
        }

        this.cardsService.getCardCount().subscribe(cardCount => {
          this.cardAmount = cardCount;
        });
      },
      error => {
        alert('Error obteniendo tarjetas:');
      }
    );
  }

  nextCard() {
    if (this.actualCard < this.cardAmount) {
      this.isFadingOut = true;
      setTimeout(() => {
        this.actualCard = this.actualCard + 1;
        this.disabledButtonLeft = false;
        if (this.actualCard === this.cardAmount) {
          this.disabledButtonRigth = true;
        }
        this.loadCardAndCount();
        this.isFadingOut = false;
      }, 300);
    }
  }

  previousCard() {
    if (this.actualCard > 1) {
      this.isFadingOut = true;
      setTimeout(() => {
        this.actualCard = this.actualCard - 1;
        this.disabledButtonRigth = false;
        if (this.actualCard < 2) {
          this.disabledButtonLeft = true;
        }
        this.loadCardAndCount();
        this.isFadingOut = false;
      }, 300);
    }
  }

  mode: ProgressBarMode = 'determinate';
  value = 80;
  bufferValue = 75;


}
