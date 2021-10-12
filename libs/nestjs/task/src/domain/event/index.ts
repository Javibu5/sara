import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

import {
  TaskEmployeesWasUpdated,
  TaskEmployeesWasUpdatedProps,
} from './task-employees-was-updated.event';
import {
  TaskNameWasUpdated,
  TaskNameWasUpdatedProps,
} from './task-name-was-updated.event';
import {
  TaskProjectWasUpdated,
  TaskProjectWasUpdatedProps,
} from './task-project-was-updated.event';
import {
  TaskStatusWasUpdated,
  TaskStatusWasUpdatedProps,
} from './task-status-was-updated.event';
import { TaskWasCreated, TaskWasCreatedProps } from './task-was-created.event';

export const eventTransformers = {
  TaskWasCreated: (event: Event<TaskWasCreatedProps>) =>
    new TaskWasCreated(
      event.aggregateId,
      event.payload.name,
      event.payload.projectId,
      event.payload.deadline,
      event.payload.isFinished,
      event.payload.employees
    ),
  TaskNameWasUpdated: (event: Event<TaskNameWasUpdatedProps>) =>
    new TaskNameWasUpdated(event.aggregateId, event.payload.name),
  TaskProjectWasUpdated: (event: Event<TaskProjectWasUpdatedProps>) =>
    new TaskProjectWasUpdated(event.aggregateId, event.payload.project),
  TaskEmployeesWasUpdated: (event: Event<TaskEmployeesWasUpdatedProps>) =>
    new TaskEmployeesWasUpdated(event.aggregateId, event.payload.employees),
  TaskStatusWasUpdated: (event: Event<TaskStatusWasUpdatedProps>) =>
    new TaskStatusWasUpdated(event.aggregateId, event.payload.isFinished),
};
