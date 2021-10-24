import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TaskStatusWasUpdated } from '../../../domain/event/task-status-was-updated.event';
import { TaskEmployeesWasUpdatedTaskProjection } from '.';
import { TaskDocument, TASKS_PROJECTION } from './task.schema';

@EventsHandler(TaskStatusWasUpdated)
export class TaskStatusWasUpdatedTaskProjection
  implements IEventHandler<TaskStatusWasUpdated>
{
  private logger = new Logger(TaskEmployeesWasUpdatedTaskProjection.name);

  constructor(
    @InjectModel(TASKS_PROJECTION)
    private readonly tasks: Model<TaskDocument>
  ) {}

  async handle(event: TaskStatusWasUpdated) {
    this.logger.debug(event);

    await this.tasks
      .findByIdAndUpdate(event.aggregateId, {
        isFinished: event.isFinished,
      })
      .exec();
  }
}
