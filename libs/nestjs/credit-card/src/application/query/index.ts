import { GetCreditCardHandler } from './get-credit-card.handler';
import { GetCreditCardsHandler } from './get-credit-cards.handler';

export * from './get-credit-card.query';
export * from './get-credit-cards.query';

export const queryHandlers = [GetCreditCardsHandler, GetCreditCardHandler];
