import { Provider } from '@nestjs/common';

import { TASK_FINDER } from '../application/services/task-finder.interface';
import { TaskFinder } from './services/task-finder.service';


export const taskProviders: Provider[] = [
    {
        provide: TASK_FINDER,
        useClass: TaskFinder,
    },
];
