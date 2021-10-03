import { Provider } from '@nestjs/common';

import { PROJECT_FINDER, } from '../application';
import { ProjecFinder } from './services';

export const projectProviders: Provider[] = [
    {
        provide: PROJECT_FINDER,
        useClass: ProjecFinder,
    }
];
