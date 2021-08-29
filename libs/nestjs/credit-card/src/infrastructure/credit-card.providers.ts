import { CREDITCARD_FINDER } from '../application/services';
import { CreditCardFinder } from './services/credit-card-finder.service';

export const creditCardProviders = [
  {
    provide: CREDITCARD_FINDER,
    useClass: CreditCardFinder,
  },
];
