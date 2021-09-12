import { EventStoreModule } from '@aulasoftwarelibre/nestjs-eventstore';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { commandHandlers, queryHandlers } from '../application';
import { eventTransformers } from '../domain/event';
import { CreditCard } from '../domain/model/creditCard';
import { CreditCardController } from './controller/credit-card.controller';
import { creditCardProviders } from './credit-card.providers';
import { projectionHandlers } from './read-model';
import {
  CREDITCARD_PROJECTION,
  CreditCardSchema,
} from './read-model/credit-card/credit-card.schema';
import { CreditCardService } from './services';

@Module({
  controllers: [CreditCardController],
  imports: [
    CqrsModule,
    EventStoreModule.forFeature([CreditCard], eventTransformers),
    MongooseModule.forFeature([
      {
        name: CREDITCARD_PROJECTION,
        schema: CreditCardSchema,
      },
    ]),
  ],
  providers: [
    ...creditCardProviders,
    ...commandHandlers,
    ...queryHandlers,
    ...projectionHandlers,
    CreditCardService,
  ],
})
export class CreditCardModule {}
