import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreditCardWasUpdate } from '../../../domain/event/creditCard-was-updated';
import {
  CREDITCARD_PROJECTION,
  CreditCardDocument,
} from './credit-card.schema';

@EventsHandler(CreditCardWasUpdate)
export class CreditCardWasUpdatedProjection
  implements IEventHandler<CreditCardWasUpdate>
{
  private logger = new Logger(CreditCardWasUpdatedProjection.name);

  constructor(
    @InjectModel(CREDITCARD_PROJECTION)
    private readonly creditCards: Model<CreditCardDocument>
  ) {}

  async handle(event: CreditCardWasUpdate) {
    this.logger.debug(JSON.stringify(event));

    await this.creditCards
      .findByIdAndUpdate(event.aggregateId, {
        creditCardNumber: event.cardNumber,
      })
      .exec();
  }
}
