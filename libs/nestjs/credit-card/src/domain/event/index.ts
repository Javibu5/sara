import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

import {
  CreditCardWasCreated,
  CreditCardWasCreatedProps,
} from './creditCard-was-created';
import { CreditCardWasUpdate } from './creditCard-was-updated';

export const eventTransformers = {
  CreditCardWasCreated: (event: Event<CreditCardWasCreatedProps>) =>
    new CreditCardWasCreated(event.aggregateId, event.payload.creditCardNumber),

  CreditCardWasUpdate: (event: Event<CreditCardWasUpdate>) =>
    new CreditCardWasUpdate(event.aggregateId, event.payload.cardNumber),
};
