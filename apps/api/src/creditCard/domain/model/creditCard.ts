import { AggregateRoot } from '@nestjs/cqrs';

import { CreditCardId } from './creditCard-id';
import { CreditCardNumber } from './creditCard-number';

export class CreditCard extends AggregateRoot {
  private _creditCardId: CreditCardId;
  private _numberCreditCard: CreditCardNumber;
  private _isDeleted: boolean;

  private constructor() {
    super();
  }

  public static registerCreditCard: CreditCard(
    creditCardId: CreditCardId, creditCardNumber: CreditCardNumber
  ){
    const creditCard = new CreditCard(creditCardId, creditCardNumber);

    creditCard.apply(
      new CreditCardWasCreated(creditCardId.value, creditCardNumber.value, false );
    )
    
  }
}
