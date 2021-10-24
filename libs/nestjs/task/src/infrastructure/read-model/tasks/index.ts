import { TaskEmployeesWasUpdatedTaskProjection } from './task-employees-was-updated.projection';
import { TaskNameWasUpdatedTaskProjection } from './task-name-was-updated.projection';
import { TaskStatusWasUpdatedTaskProjection } from './task-status-was-updated.projection';
import { TaskWasCreatedProjection } from './task-was-created.projection';

export * from './task.schema';
export * from './task-employees-was-updated.projection';
export * from './task-name-was-updated.projection';
export * from './task-project-was-updated.projection';
export * from './task-status-was-updated.projection';
export * from './task-was-created.projection';

export const projectionHandlers = [
  TaskWasCreatedProjection,
  TaskNameWasUpdatedTaskProjection,
  TaskStatusWasUpdatedTaskProjection,
  TaskEmployeesWasUpdatedTaskProjection,
];
