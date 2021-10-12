import { TaskDto } from '@sara/contracts/task';

import { TaskId } from '../../domain';

export const TASK_FINDER = 'TASK_FINDER';

export interface ITaskFinder {
  findAll(): Promise<TaskDto[]>;
  find(id: TaskId): Promise<TaskDto>;
}
