import { CreditCardWasCreatedProjection } from './credit-card-was-created.projection';
import { CreditCardWasUpdatedProjection } from './credit-card-was-edited.projection';

export * from './credit-card.schema';

export const projectionHandlers = [
  CreditCardWasCreatedProjection,
  CreditCardWasUpdatedProjection,
];
