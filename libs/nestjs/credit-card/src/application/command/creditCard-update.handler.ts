import {
  AggregateRepository,
  IdNotFoundError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreditCard } from '../../domain/model/creditCard';
import { CreditCardId } from '../../domain/model/creditCard-id';
import { CreditCardNumber } from '../../domain/model/creditCard-number';
import { CreditCardUpdateCommand } from './creditCard-update.command';

@CommandHandler(CreditCardUpdateCommand)
export class CreditCardUpdateHandler
  implements ICommandHandler<CreditCardUpdateCommand>
{
  constructor(
    @InjectAggregateRepository(CreditCard)
    private readonly creditCards: AggregateRepository<CreditCard, CreditCardId>
  ) {}
  async execute(command: CreditCardUpdateCommand) {
    const creditCardId = CreditCardId.fromString(command.id);
    const cardNumber = CreditCardNumber.fromString(command.cardNumber);
    const creditCard = await this.creditCards.find(creditCardId);

    if (!creditCard) {
      throw IdNotFoundError.withId(creditCardId);
    }

    creditCard.updateCreditCard(cardNumber);
    this.creditCards.save(creditCard);
  }
}
