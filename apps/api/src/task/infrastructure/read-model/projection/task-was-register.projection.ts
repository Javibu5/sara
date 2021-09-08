import { Inject } from '@nestjs/common';
import { IViewUpdater, ViewUpdaterHandler } from 'event-sourcing-nestjs';
import { Model } from 'mongoose';

import { TaskWasRegister } from '../../../domain/event/task-was-register';
import { TaskView } from '../schema/task.schema';

@ViewUpdaterHandler(TaskWasRegister)
export class TaskWasRegisterProjection
  implements IViewUpdater<TaskWasRegister> {
  constructor(
    @Inject('TASK_MODEL') private readonly taskModel: Model<TaskView>
  ) {}

  async handle(event: TaskWasRegister) {
    const taskView = new this.taskModel({
      _id: event.id,
      name: event.name,
      projectId: event.projectId,
      deadline: null,
      isFinished: false,
      createdAt: event.createdAt,
      createdBy: event.createdBy,
    });
  }
}
