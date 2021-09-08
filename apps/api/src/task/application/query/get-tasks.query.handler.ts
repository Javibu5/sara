import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Model } from 'mongoose';

import {
  TASK_MODEL,
  TaskView,
} from '../../infrastructure/read-model/schema/task.schema';
import { GetTasksQuery } from './get-tasks.query';

@QueryHandler(GetTasksQuery)
export class GetTasksHandler implements IQueryHandler<GetTasksQuery> {
  constructor(
    @Inject(TASK_MODEL) private readonly taskModel: Model<TaskView>
  ) {}

  async execute(query: GetTasksQuery): Promise<TaskView[]> {
    if (query.idUser === null) {
      return this.taskModel.find().exec();
    }

    return this.taskModel.find({ _employee: query.idUser }).exec();
  }
}
