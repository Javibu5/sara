import { CreditCardRegisterHandler } from './creditCard-register.handle';
import { CreditCardUpdateHandler } from './creditCard-update.handler';

export * from './creditCard-register.command';
export * from './creditCard-update.command';

export const commandHandlers = [
  CreditCardRegisterHandler,
  CreditCardUpdateHandler,
];
