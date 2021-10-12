import { CreateTaskHandler } from './create-task.handler';
import { UpdateTaskHandler } from './update-task.handler';

export * from './create-task.command';
export * from './update-task.command';

export const commandHandlers = [CreateTaskHandler, UpdateTaskHandler];
