import { EventStoreModule } from '@aulasoftwarelibre/nestjs-eventstore';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { eventTransformers } from '../domain/event';
import { CreditCard } from '../domain/model/creditCard';
import { CreditCardController } from './controller/credit-card.controller';
import {
  CreditCardSchema,
  CREDITCARD_PROJECTION,
} from './read-model/credit-card/credit-card.schema';
import { CreditCardService } from './services';

import { commandHandlers, queryHandlers } from '../application';
import { projectionHandlers } from './read-model';
import { creditCardProviders } from './credit-card.providers';

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
export class CreditCardModule { }
