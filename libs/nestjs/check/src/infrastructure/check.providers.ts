import { CHECK_FINDER } from '../application';
import { CheckFinder } from './services';

export const checkProviders = [
  {
    provide: CHECK_FINDER,
    useClass: CheckFinder,
  },
];
