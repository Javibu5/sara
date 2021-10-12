import { IdNotFoundError } from '@aulasoftwarelibre/nestjs-eventstore';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TaskDto } from '@sara/contracts/task';

import { TaskId } from '../../domain';
import { ITaskFinder, TASK_FINDER } from '../services';
import { GetTaskQuery } from './get-task.query';

@QueryHandler(GetTaskQuery)
export class GetTaskHandler implements IQueryHandler<GetTaskQuery> {
  constructor(
    @Inject(TASK_FINDER)
    private readonly finder: ITaskFinder
  ) {}

  async execute(query: GetTaskQuery): Promise<TaskDto> {
    const taskId = TaskId.fromString(query.id);

    const task = await this.finder.find(taskId);

    if (!task) {
      throw IdNotFoundError.withId(taskId);
    }

    return task;
  }
}
