import { Injectable } from '@nestjs/common';
import { EventStore, StoreEventPublisher } from 'event-sourcing-nestjs';

import { TASK_AGGREGATE_NAME } from '../../domain/model';
import { Task } from '../../domain/model/task';
import { TaskId } from '../../domain/model/task-id';
import { Tasks } from '../../domain/repository/task.repository';

@Injectable()
export class TaskRepository implements Tasks {
  constructor(
    private readonly publisher: StoreEventPublisher,
    private readonly events: EventStore
  ) {}

  async find(taskId: TaskId): Promise<Task> {
    const events = await this.events.getEvents(
      TASK_AGGREGATE_NAME,
      taskId.value
    );
    if (events.length === 0) {
      return null;
    }

    const task: Task = Reflect.construct(Task, []);
    task.loadFromHistory(events);

    return task;
  }

  save(task: Task): void {
    task = this.publisher.mergeObjectContext(task);
    task.commit();
  }
}
