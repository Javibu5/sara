import { CreditCardWasRegisterHandler } from './creditCard-register.handle';
import { CreditCardWasUpdateHandler } from './creditCard-update.handler';

export * from './creditCard-register.command';
export * from './creditCard-update.command';

export const commandHandlers = [
  CreditCardWasRegisterHandler,
  CreditCardWasUpdateHandler,
];
