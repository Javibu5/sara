import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TaskProjectWasUpdated } from '../../../domain/event/task-project-was-updated.event';
import { TaskDocument, TASKS_PROJECTION } from './task.schema';

@EventsHandler(TaskProjectWasUpdated)
export class TaskProjectWasUpdatedTaskProjection
  implements IEventHandler<TaskProjectWasUpdated>
{
  constructor(
    @InjectModel(TASKS_PROJECTION)
    private readonly tasks: Model<TaskDocument>
  ) {}

  async handle(event: TaskProjectWasUpdated) {
    await this.tasks
      .findByIdAndUpdate(event.aggregateId, {
        project: event.project,
      })
      .exec();
  }
}
