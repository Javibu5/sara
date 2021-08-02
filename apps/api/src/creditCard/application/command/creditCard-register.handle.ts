import { Inject } from '@nestjs/common';
import { ICommandHandler } from '@nestjs/cqrs';

import { CreditCard } from '../../domain/model/creditCard';
import { CreditCardId } from '../../domain/model/creditCard-id';
import { CreditCardNumber } from '../../domain/model/creditCard-number';
import { CREDITCARDS, CreditCards } from '../../domain/repository/creditCards';
import { CreditCardWasRegisterCommand } from './creditCard-register.command';

export class CreditCardWasRegisterHandler
  implements ICommandHandler<CreditCardWasRegisterCommand> {
  constructor(@Inject(CREDITCARDS) private creditCards: CreditCards) {}

  async execute(commmand: CreditCardWasRegisterCommand) {
    const creditCardId = CreditCardId.fromString(commmand.id);
    const creditCardNumber = CreditCardNumber.fromString(commmand.cardNumber);

    if (await this.creditCards.find(creditCardId)) {
      throw new Error();
    }

    const creditCard = CreditCard.registerCreditCard(
      creditCardId,
      creditCardNumber
    );

    this.creditCards.save(creditCard);
  }
}
