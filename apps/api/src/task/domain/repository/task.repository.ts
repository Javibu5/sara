import { Task } from '../model/task';
import { TaskId } from '../model/task-id';

export interface Tasks {
  find(taskId: TaskId): Promise<Task | null>;
  save(task: Task): void;
}

export const TASKS = 'TASKS';
