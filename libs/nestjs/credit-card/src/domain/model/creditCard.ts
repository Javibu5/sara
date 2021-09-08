import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';

import { CreditCardWasCreated } from '../event/creditCard-was-created';
import { CreditCardId } from './creditCard-id';
import { CreditCardNumber } from './creditCard-number';

export class CreditCard extends AggregateRoot {
  private _creditCardId: CreditCardId;
  private _creditCardnumber: CreditCardNumber;
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

  aggregateId(): string {
    return this._creditCardId.value;
  }

  private onCreditCardWasCreated(event: CreditCardWasCreated) {
    this._creditCardId = CreditCardId.fromString(event.id);
    this._creditCardnumber = CreditCardNumber.fromString(event.card_number);
    this._isDeleted = false;
  }
}
