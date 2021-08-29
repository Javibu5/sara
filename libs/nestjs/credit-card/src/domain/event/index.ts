import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

import {
  CreditCardWasCreated,
  CreditCardWasCreatedProps,
} from './creditCard-was-created';

export const eventTransformers = {
  CreditCardWasCreated: (event: Event<CreditCardWasCreatedProps>) =>
    new CreditCardWasCreated(event.aggregateId, event.payload.creditCardNumber),
};
