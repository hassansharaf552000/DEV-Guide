import { Injectable } from '@angular/core';
import { CreditCard } from '../CreditCard';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

constructor() { }
private cards: CreditCard[] = [
  { cardType: 'Visa', lastFourDigits: '7830', expiryDate: '06/24', isDefault: true, isExpired: false },
  { cardType: 'Visa', lastFourDigits: '5775', expiryDate: '06/24', isDefault: false, isExpired: false },
  { cardType: 'Mastercard', lastFourDigits: '1075', expiryDate: '02/25', isDefault: false, isExpired: false },
  { cardType: 'Mastercard', lastFourDigits: '4962', expiryDate: '06/23', isDefault: false, isExpired: true }
];

getCards(): CreditCard[] {
  return this.cards;
}

addCard(newCard: CreditCard) {
  this.cards.push(newCard);
}


}
