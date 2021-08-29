import { CreditCardFinder } from './services';
import { CREDITCARD_FINDER } from '../application';

export const creditCardProvider = [
  {
    provide: CREDITCARD_FINDER,
    useClass: CreditCardFinder,
  },
];
