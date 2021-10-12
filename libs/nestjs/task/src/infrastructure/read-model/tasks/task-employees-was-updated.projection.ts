import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TaskEmployeesWasUpdated } from '../../../domain/event/task-employees-was-updated.event';
import { TaskDocument, TASKS_PROJECTION } from './task.schema';

@EventsHandler(TaskEmployeesWasUpdated)
export class TaskEmployeesWasUpdatedTaskProjection
  implements IEventHandler<TaskEmployeesWasUpdated>
{
  constructor(
    @InjectModel(TASKS_PROJECTION)
    private readonly tasks: Model<TaskDocument>
  ) {}

  async handle(event: TaskEmployeesWasUpdated) {
    await this.tasks
      .findByIdAndUpdate(event.aggregateId, {
        employees: event.employees,
      })
      .exec();
  }
}
