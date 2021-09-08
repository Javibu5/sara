import { Connection } from 'mongoose';

import { DATABASE_CONNECTION } from '../../database/database.provider';
import { TASKS } from '../domain/repository/task.repository';
import { TASK_MODEL,TaskSchema } from './read-model/schema/task.schema';
import { TaskRepository } from './repository/task.repository';

export const TaskProviders = [
  {
    provide: TASKS,
    useClass: TaskRepository,
  },
  {
    provide: TASK_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Task', TaskSchema),
    inject: [DATABASE_CONNECTION],
  },
];
