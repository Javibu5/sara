import { GetTaskHandler } from './get-task.handler';
import { GetTasksHandler } from './get-tasks.handler';

export * from './get-task.query';
export * from './get-tasks.query';

export const queryHandlers = [GetTasksHandler, GetTaskHandler];
