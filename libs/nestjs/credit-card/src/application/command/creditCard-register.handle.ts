import {
  AggregateRepository,
  IdAlreadyRegisteredError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreditCard } from '../../domain/model/creditCard';
import { CreditCardId } from '../../domain/model/creditCard-id';
import { CreditCardNumber } from '../../domain/model/creditCard-number';
import { CreditCardRegisterCommand } from './creditCard-register.command';

@CommandHandler(CreditCardRegisterCommand)
export class CreditCardRegisterHandler
  implements ICommandHandler<CreditCardRegisterCommand>
{
  constructor(
    @InjectAggregateRepository(CreditCard)
    private readonly creditCards: AggregateRepository<CreditCard, CreditCardId>
  ) {}

  async execute(commmand: CreditCardRegisterCommand) {
    const creditCardId = CreditCardId.fromString(commmand.id);
    console.log(
      '🚀 ~ file: creditCard-register.handle.ts ~ line 24 ~ execute ~ creditCardId',
      creditCardId
    );
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
