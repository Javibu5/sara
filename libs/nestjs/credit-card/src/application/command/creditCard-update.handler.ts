import {
  AggregateRepository,
  IdNotFoundError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreditCard } from '../../domain/model/creditCard';
import { CreditCardId } from '../../domain/model/creditCard-id';
import { CreditCardNumber } from '../../domain/model/creditCard-number';
import { CreditCardWasUpdateCommand } from './creditCard-update.command';

@CommandHandler(CreditCardWasUpdateCommand)
export class CreditCardWasUpdateHandler
  implements ICommandHandler<CreditCardWasUpdateCommand>
{
  constructor(
    @InjectAggregateRepository(CreditCard)
    private readonly creditCards: AggregateRepository<CreditCard, CreditCardId>
  ) {}
  async execute(command: CreditCardWasUpdateCommand) {
    const creditCardId = CreditCardId.fromString(command.id);
    const cardNumber = CreditCardNumber.fromString(command.cardNumber);
    const creditCard = await this.creditCards.find(creditCardId);

    if (creditCard) {
      const updatedCreditCard = creditCard.updateCreditCard(cardNumber);
      this.creditCards.save(updatedCreditCard);
    }

    throw IdNotFoundError.withId(creditCardId);
  }
}
