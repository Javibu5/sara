import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';

import { CreditCardWasCreated } from '../event/creditCard-was-created';
import { CreditCardWasUpdate } from '../event/creditCard-was-updated';
import { CreditCardId } from './creditCard-id';
import { CreditCardNumber } from './creditCard-number';

export class CreditCard extends AggregateRoot {
  private _creditCardId: CreditCardId;
  private _creditCardNumber: CreditCardNumber;
  private _isDeleted: boolean;

  public static registerCreditCard(
    creditCardId: CreditCardId,
    creditCardNumber: CreditCardNumber
  ) {
    const creditCard = new CreditCard();

    creditCard.apply(
      new CreditCardWasCreated(creditCardId.value, creditCardNumber.value)
    );

    return creditCard;
  }

  updateCreditCard(cardNumber: CreditCardNumber): void {
    this.apply(
      new CreditCardWasUpdate(this._creditCardId.value, cardNumber.value)
    );
  }

  aggregateId(): string {
    return this._creditCardId.value;
  }

  private onCreditCardWasUpdate(event: CreditCardWasUpdate) {
    this._creditCardNumber = CreditCardNumber.fromString(event.cardNumber);
  }

  private onCreditCardWasCreated(event: CreditCardWasCreated) {
    this._creditCardId = CreditCardId.fromString(event.id);
    this._creditCardNumber = CreditCardNumber.fromString(event.card_number);
    this._isDeleted = false;
  }
}
