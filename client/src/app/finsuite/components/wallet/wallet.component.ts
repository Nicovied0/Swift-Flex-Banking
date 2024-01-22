import { Component } from '@angular/core';
import { CardService } from '../../services/cards.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent {
  constructor(private cardService: CardService) { }

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
    this.cardService.getCards().subscribe(
      tarjetas => {
        if (tarjetas.length > 0) {
          this.card = tarjetas[this.actualCard - 1];
        } else {
          this.card = null;
        }

        this.cardService.getCardCount().subscribe(cardCount => {
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
        this.isToggleActive = false
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
        this.isToggleActive = false
        this.isFadingOut = false;

      }, 300);
    }
  }


}
