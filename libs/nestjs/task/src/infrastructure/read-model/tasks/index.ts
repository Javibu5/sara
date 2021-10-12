import { TaskEmployeesWasUpdated } from '../../../domain/event/task-employees-was-updated.event';
import { TaskNameWasUpdated } from '../../../domain/event/task-name-was-updated.event';
import { TaskStatusWasUpdated } from '../../../domain/event/task-status-was-updated.event';
import { TaskWasCreatedProjection } from './task-was-created.projection';

export * from './task.schema';
export * from './task-employees-was-updated.projection';
export * from './task-name-was-updated.projection';
export * from './task-project-was-updated.projection';
export * from './task-status-was-updated.projection';
export * from './task-was-created.projection';

export const projectionHandlers = [
  TaskWasCreatedProjection,
  TaskNameWasUpdated,
  TaskStatusWasUpdated,
  TaskEmployeesWasUpdated,
];
