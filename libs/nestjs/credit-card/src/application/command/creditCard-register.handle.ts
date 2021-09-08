import {
  AggregateRepository,
  IdAlreadyRegisteredError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreditCard } from '../../domain/model/creditCard';
import { CreditCardId } from '../../domain/model/creditCard-id';
import { CreditCardNumber } from '../../domain/model/creditCard-number';
import { CreditCardWasRegisterCommand } from './creditCard-register.command';

@CommandHandler(CreditCardWasRegisterCommand)
export class CreditCardWasRegisterHandler
  implements ICommandHandler<CreditCardWasRegisterCommand>
{
  constructor(
    @InjectAggregateRepository(CreditCard)
    private readonly creditCards: AggregateRepository<CreditCard, CreditCardId>
  ) {}

  async execute(commmand: CreditCardWasRegisterCommand) {
    const creditCardId = CreditCardId.fromString(commmand.id);
    const creditCardNumber = CreditCardNumber.fromString(
      commmand.creditCardNumber
    );

    if (await this.creditCards.find(creditCardId)) {
      throw IdAlreadyRegisteredError.withId(creditCardId);
    }

    const creditCard = CreditCard.registerCreditCard(
      creditCardId,
      creditCardNumber
    );

    this.creditCards.save(creditCard);
  }
}
