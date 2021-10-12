import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TaskWasCreated } from '../../../domain/event/task-was-created.event';
import { TaskDocument, TASKS_PROJECTION } from './task.schema';

@EventsHandler(TaskWasCreated)
export class TaskWasCreatedProjection implements IEventHandler<TaskWasCreated> {
  constructor(
    @InjectModel(TASKS_PROJECTION)
    private readonly tasks: Model<TaskDocument>
  ) {}

  async handle(event: TaskWasCreated) {
    const task = new this.tasks({ ...event.payload });

    await task.save();
  }
}
