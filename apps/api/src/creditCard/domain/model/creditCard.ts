import { AggregateRoot } from '@nestjs/cqrs';

import { CreditCardWasCreated } from '../event/creditCard-was-created';
import { CreditCardId } from './creditCard-id';
import { CreditCardNumber } from './creditCard-number';

export class CreditCard extends AggregateRoot {
  private _creditCardId: CreditCardId;
  private _numberCreditCard: CreditCardNumber;
  private _isDeleted: boolean;

  private constructor() {
    super();
  }

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

  private onCreditCardWasCreated(event: CreditCardWasCreated) {
    this._creditCardId = CreditCardId.fromString(event.id);
    this._numberCreditCard = CreditCardNumber.fromString(event.number);
    this._isDeleted = false;
  }
}
