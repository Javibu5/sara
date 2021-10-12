import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TaskNameWasUpdated } from '../../../domain/event/task-name-was-updated.event';
import { TaskDocument, TASKS_PROJECTION } from './task.schema';

@EventsHandler(TaskNameWasUpdated)
export class TaskNameWasUpdatedTaskProjection
  implements IEventHandler<TaskNameWasUpdated>
{
  constructor(
    @InjectModel(TASKS_PROJECTION)
    private readonly tasks: Model<TaskDocument>
  ) {}

  async handle(event: TaskNameWasUpdated) {
    await this.tasks
      .findByIdAndUpdate(event.aggregateId, {
        name: event.name,
      })
      .exec();
  }
}
